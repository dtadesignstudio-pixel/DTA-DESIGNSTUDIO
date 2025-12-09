
export interface RenderSettings {
  mode: 'ARCHITECTURE' | 'INTERIOR' | 'LANDSCAPE' | 'VIDEO' | 'STYLE_ART';
  lighting: string;
  ceilingMaterial: string;
  wallMaterial: string;
  floorMaterial: string;
  style: string;
  depthOfField: string;
  // New image reference fields
  wallMaterialImage?: string;
  floorMaterialImage?: string;
  ceilingMaterialImage?: string;
  styleReferenceImage?: string; 
  // New generation settings
  batchSize: number; 
  quality: '1K' | '2K' | '4K' | '8K';
  
  // --- NEW ARCHITECTURE SPECIFIC FIELDS ---
  negativePrompt?: string;
  cameraFOV?: string; // 15mm, 24mm, 35mm, 50mm, 85mm
  viewType?: string; // Eye-level, Aerial, Worm-eye
  timeOfDay?: string; // Morning, Noon, Golden Hour, Blue Hour, Night
  season?: string; // Spring, Summer, Autumn, Winter
  weather?: string; // Sunny, Cloudy, Rainy, Foggy
  vegetationLevel?: 'Low' | 'Medium' | 'High' | 'Overgrown';
  peopleCount?: 'None' | 'Few' | 'Crowded';
  preserveGeometry?: boolean; // Critical for Arch
  preserveMaterial?: boolean; // Critical for Arch
  inputImageCategory?: '3D_RENDER' | 'SKETCH' | 'PHOTO' | 'BLUEPRINT';
}

export interface PostProcessingSettings {
  resolution: '4K' | '8K' | '12K';
  colorGrading: string;
  shadows: number;
  highlights: number;
  hdrMode: boolean;
  lensCorrection: boolean;
  clarity: number;
  denoise: boolean;
}

export interface GenerationState {
  isLoading: boolean;
  error: string | null;
}

export type AspectRatio = "1:1" | "3:4" | "4:3" | "16:9" | "9:16";

export type UserRole = 'ADMIN' | 'USER';
export type UserStatus = 'PENDING' | 'APPROVED' | 'REJECTED';
export type UserLevel = 'FREE' | 'PRO' | 'STUDIO';

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  avatar: string;
  role: UserRole;
  status: UserStatus;
  level: UserLevel;
  createdAt: number;
  trialExpiresAt?: number;
}

export interface Project {
  id: string;
  name: string;
  createdAt: number;
  thumbnail: string;
  originalImage: string;
  generatedImage: string; 
  generatedImages?: string[]; 
  videoUrl?: string; 
  settings: RenderSettings;
  postSettings: PostProcessingSettings;
  prompt: string;
  type: 'IMAGE' | 'VIDEO';
}

export type CameraMotionType = 'STATIC' | 'PAN_LEFT' | 'PAN_RIGHT' | 'ORBIT_LEFT' | 'ORBIT_RIGHT' | 'DOLLY_IN' | 'DOLLY_OUT' | 'CRANE_UP' | 'CRANE_DOWN' | 'WALKTHROUGH';

export interface VideoScene {
  id: string;
  thumbnail?: string;
  prompt: string;
  duration: number; // in seconds
  cameraMotion: CameraMotionType;
  videoUrl?: string; 
  status: 'PENDING' | 'GENERATING' | 'DONE' | 'ERROR';
}

export interface VideoWorkspaceState {
  scenes: VideoScene[];
  selectedSceneId: string | null;
  globalSettings: {
    resolution: '1080p' | '4K';
    fps: '24' | '30' | '60';
    aspectRatio: '16:9' | '9:16';
    preserveDesign: boolean;
    audioAmbience: string;
  }
}
