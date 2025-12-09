
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Header } from './components/Header';
import { SettingsPanel } from './components/SettingsPanel';
import { PostProcessingToolbar } from './components/PostProcessingToolbar';
import { AuthModal } from './components/AuthModal';
import { ProjectSidebar } from './components/ProjectSidebar';
import { AdminDashboard } from './components/AdminDashboard';
import { VideoWorkspace } from './components/VideoWorkspace';
import { LandscapeWorkspace } from './components/LandscapeWorkspace'; 
import { ArchitectureWorkspace } from './components/ArchitectureWorkspace';
import { StyleArtWorkspace } from './components/StyleArtWorkspace'; // New Import
import { DEFAULT_SETTINGS, DEFAULT_POST_SETTINGS, VIEW_ANGLES } from './constants';
import { RenderSettings, PostProcessingSettings, User, Project, VideoScene } from './types';
import { generateRealism, refineImage, upscaleRegion, editRegion, smartZoomEnhance, generateArchitectureVideo, transformSketchToReal } from './services/geminiService';
import { saveProject, getProjects } from './services/storageService';
import { getCurrentUser, logout, createTrialSession } from './services/mockAuthService';

function App() {
  // Input Mode State
  const [inputMode, setInputMode] = useState<'IMAGE' | '3D'>('IMAGE');
  const [modelUrl, setModelUrl] = useState<string | null>(null);
  const modelViewerRef = useRef<any>(null);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Generation State
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [selectedResultIndex, setSelectedResultIndex] = useState<number>(0);
  const generatedImage = generatedImages[selectedResultIndex] || null;

  // Video State (Legacy for simple viewer, now using Workspace)
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const [settings, setSettings] = useState<RenderSettings>(DEFAULT_SETTINGS);
  const [postSettings, setPostSettings] = useState<PostProcessingSettings>(DEFAULT_POST_SETTINGS);
  
  const [customPrompt, setCustomPrompt] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRefining, setIsRefining] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [comparisonMode, setComparisonMode] = useState<boolean>(false);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  
  // User & Project State
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [authModalInitialMode, setAuthModalInitialMode] = useState<'LOGIN' | 'REGISTER'>('LOGIN');

  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(false);
  const [isAdminDashboardOpen, setIsAdminDashboardOpen] = useState<boolean>(false);
  const [projects, setProjects] = useState<Project[]>([]);

  // Mobile UI State
  const [showMobileSettings, setShowMobileSettings] = useState<boolean>(false);

  // Region & Draw State
  const [isRegionMode, setIsRegionMode] = useState<boolean>(false);
  const [isSmartZoomMode, setIsSmartZoomMode] = useState<boolean>(false); 
  const [isDrawingSelection, setIsDrawingSelection] = useState<boolean>(false);
  const [selectionStart, setSelectionStart] = useState({ x: 0, y: 0 });
  const [selectionBox, setSelectionBox] = useState<{ x: number, y: number, w: number, h: number } | null>(null);
  const [isDrawMode, setIsDrawMode] = useState<boolean>(false);
  const [brushSize, setBrushSize] = useState<number>(5);
  const [brushColor, setBrushColor] = useState<string>('#ffffff');
  const [drawHistory, setDrawHistory] = useState<string[]>([]);
  const [historyStep, setHistoryStep] = useState<number>(0);
  const [drawPrompt, setDrawPrompt] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPainting, setIsPainting] = useState(false);
  
  const [showRegionActionModal, setShowRegionActionModal] = useState(false);
  const [editInstruction, setEditInstruction] = useState("");
  const [isUpscalingRegion, setIsUpscalingRegion] = useState<boolean>(false);
  const [regionResult, setRegionResult] = useState<{ original: string, upscaled: string } | null>(null);
  
  const imageRef = useRef<HTMLImageElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const modelInputRef = useRef<HTMLInputElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setProjects(getProjects());
    const params = new URLSearchParams(window.location.search);
    
    // Check for Trial Link
    if (params.get('trial') === '1') {
      setUser(createTrialSession());
      window.history.replaceState({}, document.title, window.location.pathname);
      alert("Kích hoạt dùng thử thành công!");
    } 
    // Check for Registration Link
    else if (params.get('action') === 'register') {
      setAuthModalInitialMode('REGISTER');
      setIsAuthModalOpen(true);
      window.history.replaceState({}, document.title, window.location.pathname);
    } 
    // Check for existing user
    else {
      const currentUser = getCurrentUser();
      if (currentUser) setUser(currentUser);
    }
  }, []);

  const handleLogout = () => {
    logout();
    setUser(null);
    setGeneratedImages([]);
    setVideoUrl(null);
    setSelectedImage(null);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setGeneratedImages([]);
        setVideoUrl(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleModelUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setModelUrl(url);
      setGeneratedImages([]);
    }
  };

  const handleGenerate = async () => {
    const currentUser = getCurrentUser();
    if (!currentUser) { setUser(null); setIsAuthModalOpen(true); return; }

    setShowMobileSettings(false);
    setIsLoading(true);
    setError(null);
    setVideoUrl(null);
    setGeneratedImages([]);

    try {
      if (settings.mode === 'VIDEO') {
         const scene: VideoScene = { id: 'temp', prompt: customPrompt, duration: 5, cameraMotion: 'STATIC', status: 'PENDING' };
         const vid = await generateArchitectureVideo(selectedImage, scene, true);
         setVideoUrl(vid);
      } else {
         if (!selectedImage) return;
         const batchSize = Math.max(1, Math.min(4, settings.batchSize || 1));
         const promises = Array(batchSize).fill(0).map(() => generateRealism(selectedImage, customPrompt, settings));
         const results = await Promise.all(promises);
         setGeneratedImages(results);
         setSelectedResultIndex(0);
         setComparisonMode(true);
      }
    } catch (err: any) {
      setError(err.message || "Lỗi khi tạo.");
    } finally {
      setIsLoading(false);
    }
  };

  // Specific Handler for Style Art
  const handleStyleArtGenerate = async (prompt: string) => {
    const currentUser = getCurrentUser();
    if (!currentUser) { setUser(null); setIsAuthModalOpen(true); return; }
    if (!selectedImage) { alert("Vui lòng tải ảnh lên trước."); return; }

    setIsLoading(true);
    setError(null);
    setGeneratedImages([]);

    try {
        // Reuse generateRealism but with Style Art specific settings
        const styleArtSettings: RenderSettings = {
            ...settings,
            mode: 'STYLE_ART',
            quality: '4K',
            batchSize: 1
        };
        const result = await generateRealism(selectedImage, prompt, styleArtSettings);
        setGeneratedImages([result]);
        setSelectedResultIndex(0);
    } catch (err: any) {
        setError(err.message || "Lỗi khi tạo Style Art.");
    } finally {
        setIsLoading(false);
    }
  };

  const handleLandscapeGenerate = async (prompt: string, config: any): Promise<string[]> => {
    const currentUser = getCurrentUser();
    if (!currentUser) { setUser(null); setIsAuthModalOpen(true); return []; }
    if (!selectedImage) return [];

    setIsLoading(true);
    setError(null);
    setGeneratedImages([]);

    try {
       const tempSettings: RenderSettings = {
           ...DEFAULT_SETTINGS,
           mode: 'LANDSCAPE',
           quality: config.quality,
           batchSize: config.batchSize
       };
       
       const batchSize = Math.max(1, Math.min(4, config.batchSize || 1));
       const promises = Array(batchSize).fill(0).map(() => generateRealism(selectedImage, prompt, tempSettings));
       const results = await Promise.all(promises);
       setGeneratedImages(results);
       setSelectedResultIndex(0);
       return results;
    } catch (e: any) {
        setError(e.message || "Lỗi tạo cảnh quan.");
        return [];
    } finally {
        setIsLoading(false);
    }
  };

  const handleImageUpdate = (newImage: string) => {
      setGeneratedImages(prev => [...prev, newImage]);
      setSelectedResultIndex(prev => prev + 1);
  };

  const handleChangeViewAngle = async (angleInstruction: string) => {
     if (!generatedImage) return;
     setIsRefining(true);
     try {
         const newImage = await refineImage(generatedImage, postSettings, `Change view angle to: ${angleInstruction}. Keep architectural style.`);
         setGeneratedImages(prev => [...prev, newImage]);
         setSelectedResultIndex(generatedImages.length);
     } catch (e) {
         setError("Không thể thay đổi góc nhìn.");
     } finally {
         setIsRefining(false);
     }
  };

  const handlePostProcessApply = async () => {
    if (!generatedImage) return;
    setIsRefining(true);
    try {
      const result = await refineImage(generatedImage, postSettings);
      setGeneratedImages(prev => [...prev, result]);
      setSelectedResultIndex(generatedImages.length);
    } catch (err: any) {
      setError("Lỗi khi xử lý hậu kỳ.");
    } finally {
      setIsRefining(false);
    }
  };

  const handleSaveProject = () => {
    if (!generatedImage && !videoUrl) return;
    const projectName = prompt("Nhập tên dự án:");
    if (!projectName) return;

    const newProject: Project = {
      id: Date.now().toString(),
      name: projectName,
      createdAt: Date.now(),
      thumbnail: generatedImage || videoUrl || "",
      originalImage: selectedImage || "",
      generatedImage: generatedImage || "",
      generatedImages: generatedImages,
      videoUrl: videoUrl || undefined,
      settings: settings,
      postSettings: postSettings,
      prompt: customPrompt,
      type: settings.mode === 'VIDEO' ? 'VIDEO' : 'IMAGE'
    };
    saveProject(newProject);
    setProjects(getProjects());
    alert("Đã lưu vào Thư viện!");
  };

  const handleSelectProject = (project: Project) => {
    setSelectedImage(project.originalImage);
    if (project.type === 'VIDEO' && project.videoUrl) {
       setVideoUrl(project.videoUrl);
       setGeneratedImages([]);
       setSettings({ ...project.settings, mode: 'VIDEO' });
    } else {
       setGeneratedImages(project.generatedImages || [project.generatedImage]);
       setSelectedResultIndex(0);
       setVideoUrl(null);
       setSettings(project.settings);
    }
    setPostSettings(project.postSettings);
    setCustomPrompt(project.prompt);
    setIsHistoryOpen(false);
  };

  // Region Handlers (Shared)
  const handleRegionMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isRegionMode || !imageRef.current) return;
    e.preventDefault();
    const rect = imageRef.current.getBoundingClientRect();
    setSelectionStart({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setSelectionBox({ x: e.clientX - rect.left, y: e.clientY - rect.top, w: 0, h: 0 });
    setIsDrawingSelection(true);
  };

  const handleRegionMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDrawingSelection || !imageRef.current || !isRegionMode) return;
    const rect = imageRef.current.getBoundingClientRect();
    const currentX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const currentY = Math.max(0, Math.min(e.clientY - rect.top, rect.height));
    setSelectionBox({
        x: Math.min(currentX, selectionStart.x),
        y: Math.min(currentY, selectionStart.y),
        w: Math.abs(currentX - selectionStart.x),
        h: Math.abs(currentY - selectionStart.y)
    });
  };

  const handleRegionMouseUp = () => {
    if (!isDrawingSelection) return;
    setIsDrawingSelection(false);
    if (selectionBox && selectionBox.w > 20 && selectionBox.h > 20) {
        if (isSmartZoomMode) {
             processRegion('SMART_ZOOM');
        } else {
             setShowRegionActionModal(true);
        }
    } else {
        setSelectionBox(null);
    }
  };

  const processRegion = async (action: 'UPSCALE' | 'EDIT' | 'SMART_ZOOM') => {
    if (!imageRef.current || !generatedImage || !selectionBox) return;
    setShowRegionActionModal(false);
    setIsUpscalingRegion(true);

    try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = generatedImage;
        await new Promise(resolve => img.onload = resolve);
        const rect = imageRef.current.getBoundingClientRect();
        const scaleX = img.naturalWidth / rect.width;
        const scaleY = img.naturalHeight / rect.height;
        
        const upscaleFactor = 3; 
        canvas.width = (selectionBox.w * scaleX) * upscaleFactor;
        canvas.height = (selectionBox.h * scaleY) * upscaleFactor;

        if (ctx) {
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            ctx.drawImage(img, selectionBox.x * scaleX, selectionBox.y * scaleY, selectionBox.w * scaleX, selectionBox.h * scaleY, 0, 0, canvas.width, canvas.height);
        }
        const croppedBase64 = canvas.toDataURL('image/png');

        let resultUrl;
        if (action === 'EDIT') {
            resultUrl = await editRegion(generatedImage, croppedBase64, editInstruction || "Make it better");
        } else if (action === 'SMART_ZOOM') {
            resultUrl = await smartZoomEnhance(croppedBase64);
        } else {
            resultUrl = await upscaleRegion(croppedBase64, customPrompt);
        }

        setRegionResult({ original: croppedBase64, upscaled: resultUrl });
        setSelectionBox(null);
        setEditInstruction("");

    } catch (e) {
        alert("Lỗi xử lý vùng chọn");
    } finally {
        setIsUpscalingRegion(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col font-['Inter']">
      <Header 
        user={user} 
        currentMode={settings.mode || 'INTERIOR'}
        onModeChange={(newMode) => setSettings({ ...settings, mode: newMode })}
        onLoginClick={() => { setAuthModalInitialMode('LOGIN'); setIsAuthModalOpen(true); }}
        onHistoryClick={() => setIsHistoryOpen(true)}
        onAdminClick={() => setIsAdminDashboardOpen(true)}
        onLogout={handleLogout}
      />

      <ProjectSidebar 
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        projects={projects}
        onSelectProject={handleSelectProject}
        onRefreshProjects={() => setProjects(getProjects())}
      />

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onLoginSuccess={setUser} 
        initialMode={authModalInitialMode}
      />
      
      <AdminDashboard isOpen={isAdminDashboardOpen} onClose={() => setIsAdminDashboardOpen(false)} />

      {/* --- WORKSPACE ROUTING --- */}
      {settings.mode === 'VIDEO' ? (
         <VideoWorkspace 
            uploadedImage={selectedImage}
            onUploadImage={handleImageUpload}
            onGenerate={async (id, scene, preserve) => {
               return await generateArchitectureVideo(selectedImage, scene, preserve);
            }}
            onExport={() => alert("Chức năng xuất video đang phát triển")}
         />
      ) : settings.mode === 'LANDSCAPE' ? (
         <LandscapeWorkspace 
            uploadedImage={selectedImage}
            onUploadImage={handleImageUpload}
            onGenerate={handleLandscapeGenerate}
            onUpdateImage={handleImageUpdate}
            generatedImages={generatedImages}
            isLoading={isLoading}
         />
      ) : settings.mode === 'STYLE_ART' ? (
         /* --- NEW STYLE ART WORKSPACE --- */
         <StyleArtWorkspace 
            uploadedImage={selectedImage}
            onUploadImage={handleImageUpload}
            onGenerate={handleStyleArtGenerate}
            generatedImages={generatedImages}
            isLoading={isLoading}
            customPrompt={customPrompt}
            setCustomPrompt={setCustomPrompt}
            onUpdateImage={handleImageUpdate}
         />
      ) : (
         /* --- DEFAULT ARCHITECTURE/INTERIOR WORKSPACE --- */
         <ArchitectureWorkspace
             settings={settings}
             onChangeSettings={setSettings}
             uploadedImage={selectedImage}
             onUploadImage={handleImageUpload}
             onGenerate={handleGenerate}
             generatedImages={generatedImages}
             isLoading={isLoading}
             customPrompt={customPrompt}
             setCustomPrompt={setCustomPrompt}
             onUpdateImage={handleImageUpdate}
         />
      )}

      {/* Region & Zoom Modals (Shared) */}
      {showRegionActionModal && (
          <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4">
              <div className="bg-slate-900 rounded-xl p-6 max-w-md w-full border border-slate-700 shadow-2xl">
                  <h3 className="text-lg font-bold text-white mb-4">Bạn muốn làm gì với vùng chọn này?</h3>
                  <div className="space-y-4">
                      <button onClick={() => processRegion('UPSCALE')} className="w-full p-4 bg-slate-800 hover:bg-slate-700 rounded-lg text-left flex items-center gap-4 transition-colors group">
                         <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                         </div>
                         <div>
                             <div className="font-bold text-white">Extract Subject</div>
                             <div className="text-xs text-slate-400">Tách vật thể & làm nét (Macro)</div>
                         </div>
                      </button>
                      <div className="relative">
                          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-700"></div></div>
                          <div className="relative flex justify-center text-xs uppercase"><span className="bg-slate-900 px-2 text-slate-500">Hoặc chỉnh sửa</span></div>
                      </div>
                      <div className="p-4 bg-slate-800 rounded-lg border border-purple-500/30">
                          <label className="text-xs font-bold text-purple-400 uppercase mb-2 block">Mô tả thay đổi (Inpainting)</label>
                          <input type="text" value={editInstruction} onChange={(e) => setEditInstruction(e.target.value)} placeholder="Ví dụ: Thêm một cái cây, Đổi màu ghế sofa..." className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-sm text-white mb-3 focus:ring-purple-500 focus:border-purple-500" />
                          <button onClick={() => processRegion('EDIT')} disabled={!editInstruction} className="w-full py-2 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white rounded font-bold text-sm">Thực hiện Thay đổi</button>
                      </div>
                  </div>
                  <button onClick={() => { setShowRegionActionModal(false); setSelectionBox(null); }} className="mt-4 text-slate-500 hover:text-white text-sm w-full text-center">Hủy bỏ</button>
              </div>
          </div>
      )}

      {regionResult && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
           <div className="max-w-5xl w-full h-[80vh] bg-slate-900 border border-slate-700 flex flex-col rounded-xl overflow-hidden">
               <div className="p-4 border-b border-slate-800 flex justify-between">
                   <h3 className="text-white font-bold flex items-center gap-2">{isSmartZoomMode ? 'Smart Zoom Result' : 'Kết quả xử lý vùng'} <span className="bg-blue-600 text-[10px] px-2 py-0.5 rounded text-white uppercase">8K Enhanced</span></h3>
                   <button onClick={() => setRegionResult(null)} className="text-slate-400 hover:text-white">Đóng</button>
               </div>
               <div className="flex-1 flex gap-1 p-1 bg-black">
                   <div className="flex-1 relative"><img src={regionResult.original} className="w-full h-full object-contain" /><span className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 rounded">Gốc (Crop)</span></div>
                   <div className="flex-1 relative"><img src={regionResult.upscaled} className="w-full h-full object-contain" /><span className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 rounded">Kết quả AI</span></div>
               </div>
               <div className="p-4 bg-slate-800 flex justify-end">
                   <a href={regionResult.upscaled} download="region_edit.png" className="bg-blue-600 text-white px-4 py-2 rounded">Tải về</a>
               </div>
           </div>
        </div>
      )}
    </div>
  );
}

export default App;
