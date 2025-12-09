
// ... existing constants ...

export const LIGHTING_OPTIONS = [
  "Ánh sáng tự nhiên (Mềm mại)",
  "Giờ vàng (Ấm áp)",
  "Ánh sáng Studio (Sạch sẽ)",
  "Điện ảnh (Kịch tính)",
  "Trời âm u (Khuếch tán nhẹ)",
  "Ban đêm (Đèn nội thất ấm)"
];

export const CUSTOM_OPTION_LABEL = "Tùy chọn của bạn (Custom)...";

export const CEILING_OPTIONS = [
  CUSTOM_OPTION_LABEL,
  "Trần thạch cao phẳng",
  "Trần thạch cao giật cấp",
  "Trần bê tông mài",
  "Trần xi măng thô (industrial)",
  "Trần gỗ tự nhiên",
  "Trần ốp gỗ lam",
  "Trần nhôm nan",
  "Trần kim loại đục lỗ",
  "Trần acrylic sáng mờ",
  "Trần polycarbonate trong suốt",
  "Trần giấy dán họa tiết Nhật",
  "Trần ánh sáng gián tiếp LED",
  "Trần gương phản chiếu",
  "Trần vải căng (stretch ceiling)",
  "Trần ốp đá mỏng",
  "Trần lưới thép sơn đen",
  "Trần kính lấy sáng",
  "Trần phủ sơn giả bê tông",
  "Trần tre đan tự nhiên",
  "Trần mây đan thủ công"
];

export const WALL_OPTIONS = [
  CUSTOM_OPTION_LABEL,
  "Tường sơn matte",
  "Tường sơn bóng",
  "Tường xi măng thô",
  "Tường bê tông giả",
  "Tường gỗ ốp đứng",
  "Tường gạch thẻ",
  "Tường gạch cổ",
  "Tường đá tự nhiên",
  "Tường đá slate",
  "Tường ốp PVC giả đá",
  "Tường giấy dán họa tiết",
  "Tường vải dán cao cấp",
  "Tường lam gỗ trang trí",
  "Tường panel nan nhựa",
  "Tường kính trong suốt",
  "Tường kính mờ",
  "Tường thạch cao phẳng",
  "Tường ốp gạch mosaic",
  "Tường tranh tường nghệ thuật",
  "Tường bê tông ốp gỗ kết hợp"
];

export const FLOOR_OPTIONS = [
  CUSTOM_OPTION_LABEL,
  "Sàn gỗ tự nhiên",
  "Sàn gỗ công nghiệp",
  "Sàn gạch men bóng",
  "Sàn gạch mờ chống trượt",
  "Sàn đá marble",
  "Sàn đá granite",
  "Sàn terrazzo",
  "Sàn xi măng mài",
  "Sàn thảm len cao cấp",
  "Sàn thảm tấm văn phòng",
  "Sàn vinyl giả gỗ",
  "Sàn epoxy bóng",
  "Sàn gạch bông cổ điển",
  "Sàn gỗ ngoài trời composite",
  "Sàn đá ong xám",
  "Sàn gạch giả gỗ",
  "Sàn gỗ sồi trắng Bắc Âu",
  "Sàn bê tông đánh bóng",
  "Sàn nhựa SPC",
  "Sàn gạch mosaic trang trí"
];

export const STYLE_OPTIONS = [
  "Hiện đại tối giản (Minimalist)",
  "Công nghiệp (Loft/Industrial)",
  "Bắc Âu (Scandinavian)",
  "Đương đại sang trọng (Luxury)",
  "Hiện đại giữa thế kỷ (Mid-Century)",
  "Cổ điển truyền thống (Classic)",
  "Địa trung hải (Mediterranean)",
  "Nhiệt đới (Tropical Modern)",
  "Tân cổ điển (Neo-Classical)"
];

export const DOF_OPTIONS = [
  "Vô cực (Rõ nét toàn bộ - f/16)",
  "Tiêu chuẩn (Tự nhiên - f/8)",
  "Xóa phông nhẹ (Cinematic - f/4)",
  "Xóa phông mạnh (Bokeh/Macro - f/1.8)",
  "Tilt-Shift (Hiệu ứng mô hình)"
];

export const COLOR_GRADING_OPTIONS = [
  "Tự nhiên (Neutral)",
  "Điện ảnh (Teal & Orange)",
  "Ấm áp (Warm Vintage)",
  "Lạnh & Sạch (Cool Clean)",
  "Đen trắng nghệ thuật (B&W)",
  "Rực rỡ (Vibrant)",
  "Phim nhựa (Kodak Film Look)"
];

export const VIEW_ANGLES = [
  { label: "Mắt người (Eye Level)", value: "Eye level shot, straight angle, human perspective" },
  { label: "Góc thấp (Low Angle)", value: "Low angle shot, looking up, imposing structure" },
  { label: "Góc cao (High Angle)", value: "High angle shot, looking down slightly" },
  { label: "Chim bay (Bird's Eye)", value: "Bird's eye view, aerial photography, drone shot" },
  { label: "Góc rộng (Wide)", value: "Wide angle lens, expansive view, 16mm lens" },
  { label: "Cận cảnh (Close-up)", value: "Close-up detail shot, macro photography, depth of field" }
];

// --- ARCHITECTURE SPECIFIC CONSTANTS ---

export const ARCH_INPUT_TYPES = [
  { id: '3D_RENDER', label: '3D Render (Thô/Chi tiết)' },
  { id: 'SKETCH', label: 'Phác thảo tay (Sketch)' },
  { id: 'PHOTO', label: 'Ảnh hiện trạng (Cải tạo)' },
  { id: 'BLUEPRINT', label: 'Bản vẽ kỹ thuật/Mặt bằng' }
];

export const CAMERA_FOVS = [
  { id: '12mm', label: '12mm (Siêu rộng)' },
  { id: '24mm', label: '24mm (Kiến trúc tiêu chuẩn)' },
  { id: '35mm', label: '35mm (Mắt người)' },
  { id: '50mm', label: '50mm (Tiêu chuẩn)' },
  { id: '85mm', label: '85mm (Tele/Chi tiết)' }
];

export const TIMES_OF_DAY = [
  { id: 'Morning', label: 'Buổi sáng (Trong trẻo)' },
  { id: 'Noon', label: 'Buổi trưa (Nắng gắt)' },
  { id: 'Golden Hour', label: 'Giờ vàng (Chiều tà)' },
  { id: 'Blue Hour', label: 'Giờ xanh (Chạng vạng)' },
  { id: 'Night', label: 'Ban đêm (Đèn)' }
];

export const WEATHERS = [
  { id: 'Sunny', label: 'Nắng đẹp' },
  { id: 'Cloudy', label: 'Nhiều mây' },
  { id: 'Overcast', label: 'Âm u (Moody)' },
  { id: 'Rainy', label: 'Mưa' },
  { id: 'Foggy', label: 'Sương mù' }
];

export const VEGETATION_LEVELS = [
  { id: 'Low', label: 'Ít (Đô thị)' },
  { id: 'Medium', label: 'Vừa phải (Quy hoạch)' },
  { id: 'High', label: 'Nhiều (Resort)' },
  { id: 'Overgrown', label: 'Rậm rạp (Hoang sơ)' }
];

// --- STYLE ART PRESETS ---
export const STYLE_ART_PRESETS = [
  {
    id: 1,
    title: "Minimalist Line Drawing",
    label: "Vẽ nét tối giản",
    prompt: "Bản vẽ kiến trúc nét tối giản, đường mảnh sạch, không đổ bóng, đơn sắc, phối cảnh mặt đứng nhà hiện đại, độ chính xác cao, phong cách sketch tinh gọn"
  },
  {
    id: 2,
    title: "Axonometric / Exploded",
    label: "Trục đo / Tách lớp",
    prompt: "Đồ họa kiến trúc trục đo, mô hình tách lớp, phân tách cấu trúc và vật liệu, nhãn rõ ràng, nền trắng, hình học chính xác, phong cách đồ họa kiến trúc chuyên nghiệp"
  },
  {
    id: 3,
    title: "Flat Illustration",
    label: "Phẳng màu",
    prompt: "Minh họa phẳng cảnh phố đô thị, màu đậm, hình khối đơn giản, không gradient, đường viền mượt, kiến trúc hiện đại, phong cách poster đồ họa"
  },
  {
    id: 4,
    title: "Isometric Graphic",
    label: "Đồ họa isometric",
    prompt: "Đồ họa isometric cảnh quan kiến trúc, nhà và cây cối, đổ bóng nhẹ, bảng màu pastel, chi tiết cao, dựng hình isometric chất lượng, sơ đồ thiết kế đô thị"
  },
  {
    id: 5,
    title: "Watercolor Rendering",
    label: "Phong cách màu nước",
    prompt: "Phối cảnh kiến trúc vẽ màu nước, đường nét mềm, loang màu sinh động, chất liệu vẽ tay, biệt thự cảnh quan nhiệt đới, ánh sáng tự nhiên, phong cách nghệ thuật"
  },
  {
    id: 6,
    title: "Digital Matte Painting",
    label: "Matte painting điện ảnh",
    prompt: "Matte painting điện ảnh, ánh sáng chân thực, chiều sâu không khí, cảnh đô thị quy mô lớn, bầu trời kịch tính, concept art môi trường độ phân giải 8k"
  },
  {
    id: 7,
    title: "Photorealistic CGI",
    label: "Ảnh chân thực CGI",
    prompt: "Phối cảnh kiến trúc CGI siêu thực, vật liệu PBR, ánh sáng toàn cục, nội thất phòng khách, ánh nắng qua cửa lớn, chi tiết cực cao, render 8k"
  },
  {
    id: 8,
    title: "Noir / High Contrast B&W",
    label: "Đen trắng tương phản mạnh",
    prompt: "Cảnh kiến trúc phong cách noir, bóng đổ sâu, độ tương phản mạnh, đen–trắng, không khí kịch tính, góc nhìn đường phố với vùng sáng sắc nét"
  },
  {
    id: 9,
    title: "Blueprint / Technical",
    label: "Bản vẽ kỹ thuật",
    prompt: "Bản vẽ kiến trúc kiểu blueprint, đường kỹ thuật màu trắng trên nền xanh, phong cách CAD sạch, thể hiện mặt bằng + mặt đứng, độ rõ nét cao"
  },
  {
    id: 10,
    title: "Collage (Mixed Media)",
    label: "Cắt ghép đồ họa",
    prompt: "Đồ họa kiến trúc collage, chất liệu đa dạng, cắt dán tạp chí, nét vẽ tay, mảng màu pastel, bảng concept nghệ thuật, bố cục sáng tạo"
  },
  {
    id: 11,
    title: "Futuristic / Sci-fi",
    label: "Tương lai / Khoa học viễn tưởng",
    prompt: "Công trình kiến trúc tương lai, ánh sáng neon, đường cong hiện đại, vật liệu tiên tiến, cảnh đêm, ánh sáng điện ảnh, thành phố utopia công nghệ cao"
  },
  {
    id: 12,
    title: "Tropical Vietnam Style",
    label: "Phong cách nhiệt đới Việt Nam",
    prompt: "Phối cảnh kiến trúc Việt Nam nhiệt đới, cây xanh tươi tốt, ánh sáng tự nhiên, không khí ẩm, vật liệu gỗ + đá địa phương, cảnh quan bản địa chân thực, màu ấm"
  },
  {
    id: 13,
    title: "Vintage Arch Poster",
    label: "Poster kiến trúc vintage",
    prompt: "Poster kiến trúc vintage, typography retro, màu trầm, hạt film grain, bố cục hình học, phong cách đồ họa mid-century"
  },
  {
    id: 14,
    title: "Hand-drawn Sketch",
    label: "Sketch tay mực và marker",
    prompt: "Sketch kiến trúc vẽ tay, bút mực + marker xám, nét phóng khoáng, vẽ concept mặt đứng, đường vẽ nghệ thuật, cảm giác tự nhiên"
  },
  {
    id: 15,
    title: "Semi-realistic Concept",
    label: "Nghệ thuật bán hiện thực",
    prompt: "Concept art kiến trúc bán hiện thực, ánh sáng mềm, nét cọ họa sĩ, resort hiện đại trong thiên nhiên, chiều sâu không khí"
  },
  {
    id: 16,
    title: "Geometric Abstraction",
    label: "Trừu tượng hình học",
    prompt: "Minh họa kiến trúc trừu tượng hình học, khối mạnh mẽ, bảng màu tối giản, phong cách Bauhaus, hình học sạch, đồ họa mang tính khái niệm"
  },
  {
    id: 17,
    title: "Clay Render Style",
    label: "Render chất liệu đất sét",
    prompt: "Render mô hình đất sét trắng, bề mặt mịn, không có texture, ánh sáng hướng mạnh, bóng mềm, mô hình khối kiến trúc, phong cách đơn sắc sạch"
  },
  {
    id: 18,
    title: "Cutaway Diagram",
    label: "Sơ đồ cắt lớp",
    prompt: "Sơ đồ kiến trúc cắt lớp, hiển thị không gian bên trong, nhãn rõ ràng, đồ họa sắc nét, cắt lớp công trình hiện đại, nền trắng tinh gọn"
  },
  {
    id: 19,
    title: "Environmental Illustration",
    label: "Minh họa môi trường",
    prompt: "Minh họa môi trường chi tiết, cây xanh, đá, mặt nước, thiên nhiên bao quanh kiến trúc, ánh sáng tự nhiên, đổ bóng mềm"
  },
  {
    id: 20,
    title: "Anime / Stylized",
    label: "Phong cách anime",
    prompt: "Cảnh đường phố kiến trúc phong cách anime, màu tươi sáng, đường viền sạch, bầu trời gradient nhẹ, ánh sáng ấm, cảm hứng Ghibli, không khí dễ chịu"
  }
];

export const VIETNAM_CONTEXT_PRESETS = [
  {
    category: "I. ĐÔ THỊ HIỆN ĐẠI (Urban)",
    prompts: [
      { label: "Skyline đô thị hiện đại, chung cư cao tầng, sương nhẹ ban ngày", value: "Vietnam modern urban skyline, high-rise apartments, soft daylight haze, distant city silhouettes, minimal background detail, contemporary Southeast Asian atmosphere" },
      { label: "Phố phường Hà Nội, vỉa hè rợp cây, xe cộ nhẹ nhàng", value: "Hanoi urban street, tree-lined sidewalks, light traffic blur, overcast soft lighting, subtle architectural textures, clean minimal backdrop" },
      { label: "Đại lộ Sài Gòn, nắng sớm, cây nhiệt đới", value: "Ho Chi Minh City boulevard, tropical trees, warm morning light, modern buildings in the distance, simple atmospheric background" },
      { label: "Khu đô thị mới quy hoạch, đường rộng, dải cây xanh", value: "Vietnam new urban zone, wide road, greenery strips, soft shadows, neutral tones, calm modern atmosphere" },
      { label: "Khu dân cư ngoại ô yên tĩnh, nhà thấp tầng", value: "Vietnam suburban residential street, low-rise houses, overhead power lines, gentle afternoon lighting, muted colors" }
    ]
  },
  {
    category: "II. NÔNG THÔN (Countryside)",
    prompts: [
      { label: "Cánh đồng lúa xanh mát, làng quê yên bình", value: "Vietnam countryside rice fields, lush green tones, distant village houses, soft clouds, peaceful rural atmosphere" },
      { label: "Đường làng rặng tre, nắng ấm", value: "Rural Vietnamese path, bamboo clusters, low vegetation, warm sunlight, simple natural background" },
      { label: "Ruộng bậc thang miền núi phía Bắc, sương sớm", value: "Northern Vietnam farmland, terraced fields in the distance, cool morning mist, quiet and atmospheric landscape" },
      { label: "Cảnh sông nước miền Tây, thuyền bè xa xa", value: "Vietnam rural riverside scene, fishing boats, calm water reflection, light haze, minimal background details" },
      { label: "Làng quê với cây dừa/cọ, mái nhà thưa thớt", value: "Village landscape with palm trees, scattered houses, natural earthy tones, gentle backlight" }
    ]
  },
  {
    category: "III. VÙNG BIỂN (Coastal)",
    prompts: [
      { label: "Bờ biển nhiệt đới, biển xanh êm dịu", value: "Vietnam tropical coastline, calm blue sea, distant islands, pale sky, soft lighting, minimal distractions" },
      { label: "Lối đi dạo ven biển, hàng dừa, cát trắng", value: "Beach walkway in Vietnam, coconut trees, white sand, gentle ocean breeze mood, clean serene backdrop" },
      { label: "Resort ven biển, nắng chiều tà ấm áp", value: "Vietnam seaside resort atmosphere, horizon line ocean, warm late afternoon sun, neutral tones" },
      { label: "Làng chài ven biển, sương mù nhẹ", value: "Fishing village coastal scene, boats far away, misty blue background, natural seaside ambiance" },
      { label: "Bờ biển miền Trung, núi non xa xa", value: "Central Vietnam coastline with mountains in distance, soft atmospheric haze, simple gradient sky" }
    ]
  },
  {
    category: "IV. VÙNG NÚI & TRUNG DU (Highlands)",
    prompts: [
      { label: "Thung lũng đồi núi, sương mù buổi sáng", value: "Vietnam mountain valley, soft blue-green hills, morning fog layers, peaceful atmospheric depth" },
      { label: "Cao nguyên Mộc Châu, đồi chè, nắng nhẹ", value: "Moc Chau plateau, distant tea hills, gentle sunlight, natural muted landscape" },
      { label: "Rừng thông Đà Lạt, không khí se lạnh", value: "Da Lat pine forest background, cool tone lighting, rolling hills, quiet highland atmosphere" },
      { label: "Núi đá vôi hùng vĩ phía xa (Ninh Bình/Hạ Long)", value: "Northern Vietnam karst mountains far away, dramatic shapes softened by haze, clean sky" },
      { label: "Đường đèo vùng cao, cây thông ven đường", value: "Highland rural road, pine trees, light mist, organic terrain lines, minimal background noise" }
    ]
  },
  {
    category: "V. KIẾN TRÚC CỔ & DI SẢN (Heritage)",
    prompts: [
      { label: "Làng cổ Bắc Bộ, mái ngói, tường vàng rêu phong", value: "Vietnam ancient village, tiled roofs, yellow washed walls, mossy textures, soft warm lighting, cultural atmosphere" },
      { label: "Cung đình Huế, tường thành cổ kính, trầm mặc", value: "Hue royal landscape mood, trees, distant old walls, soft pastel tones, historical background effect" },
      { label: "Phố cổ Hội An, đèn lồng, chiều tà", value: "Hoi An old town ambience, lantern colors muted, river far away, warm evening sky" },
      { label: "Sân đình làng quê, cây đa cổ thụ", value: "Northern countryside communal house yard motif, banyan trees, stone yard, heritage mood" },
      { label: "Khuôn viên chùa chiền, thanh tịnh, tâm linh", value: "Vietnam pagoda garden background, ancient roofs, minimal haze, peaceful spiritual atmosphere" }
    ]
  },
  {
    category: "VI. CẢNH QUAN HIỆN ĐẠI (Modern Landscape)",
    prompts: [
      { label: "Công viên cảnh quan hiện đại, thảm cỏ xanh mướt", value: "Contemporary Vietnamese landscape park, trimmed trees, open green lawn, soft shadows, neutral tones" },
      { label: "Lối đi dạo ven sông, cỏ lau trang trí", value: "Modern urban riverside walkway, clean pavement, ornamental grasses, airy atmosphere" },
      { label: "Sân vườn nhiệt đới tối giản (Minimal Tropical)", value: "Minimal tropical garden background, lush greenery, soft diffused sunlight, stylized natural look" },
      { label: "Quảng trường đô thị, lát đá sạch sẽ", value: "Vietnam plaza environment, simple grid pavement, low shrubs, calm modern composition" },
      { label: "Công viên công cộng với mặt nước tĩnh lặng", value: "Contemporary public park with water feature, light reflections, elegant minimal landscaping" }
    ]
  },
  {
    category: "VII. THỜI TIT & ÁNH SÁNG (Weather)",
    prompts: [
      { label: "Giờ vàng (Golden Hour), nắng ấm, bóng đổ dài", value: "Soft golden hour background, warm highlights, long shadows, gentle sky gradient" },
      { label: "Trời nhiều mây (Overcast), ánh sáng khuếch tán đều", value: "Overcast sky, diffused neutral lighting, soft edges on distant objects, ideal for architectural visibility" },
      { label: "Sương mù buổi sớm, mờ ảo, có chiều sâu", value: "Mild foggy morning, clean atmospheric depth, subtle cool tones, minimal visual noise" },
      { label: "Nắng nhiệt đới rực rỡ, trời trong xanh", value: "Bright tropical daylight, crisp colors, soft clouds, clean open sky" },
      { label: "Giờ xanh (Blue Hour), chạng vạng tối, đèn phố lên", value: "Blue hour city ambience, soft glowing lights, low contrast background" }
    ]
  },
  {
    category: "VIII. CÂY NHIỆT ĐỚI (Tropical Vegetation)",
    prompts: [
      { label: "Cây cối nhiệt đới, dừa, cọ, nắng sáng", value: "Vietnam tropical plants, palm trees, lush vegetation, bright soft light, clean composition" },
      { label: "Thực vật hỗn hợp: Chuối, sứ, tầng lá thấp", value: "Mixed Southeast Asian greenery, banana plants, frangipani, layered foliage, neutral tones" },
      { label: "Cảnh quan hiện đại ít bảo dưỡng, cây lá to", value: "Low-maintenance modern landscaping with tropical leaves, warm tone, soft shadows" },
      { label: "Vườn cây bụi rậm rạp, tự nhiên", value: "Vietnam garden vegetation with clean background, bushy shrubs, gentle sunlight" },
      { label: "Nền cây xanh đơn giản, ánh nắng xuyên qua lá", value: "Simple tropical backdrop, filtered sunlight through leaves, atmospheric depth" }
    ]
  },
  {
    category: "IX. ĐỜI SỐNG THƯỜNG NHẬT (Daily Life)",
    prompts: [
      { label: "Đường phố nhộn nhịp, bóng xe máy mờ ảo", value: "Vietnam street background, motorbike silhouettes blurred, soft atmosphere, modern-day mood" },
      { label: "Ngõ nhỏ dân cư, chậu cây, ánh sáng gián tiếp", value: "Daily residential alley in Vietnam, plants, warm indirect light, minimal textures" },
      { label: "Không gian cộng đồng, người đi bộ thưa thớt", value: "Urban community space, trees, pedestrian path, subtle city vibe" },
      { label: "Góc phố yên tĩnh, xe máy dựng bên đường", value: "Quiet neighborhood street, parked motorbikes, green shade trees, natural tones" },
      { label: "Bờ sông hóng gió, bóng người xa xa", value: "Vietnam riverside promenade life, distant people silhouettes blurred, atmospheric lighting" }
    ]
  },
  {
    category: "X. BỐI CẢNH TRUNG TÍNH (Neutral)",
    prompts: [
      { label: "Bầu trời gradient nhẹ, cảnh quan xa mờ (Tối giản)", value: "Minimal atmospheric gradient sky, distant soft landscape, clean unobtrusive background" },
      { label: "Địa hình đồi thoai thoải, màu trung tính", value: "Simple natural scenery with light haze, smooth terrain shapes, neutral colors, architectural-friendly" },
      { label: "Phông nền mờ ảo cây xanh, tôn vinh công trình", value: "Soft environmental backdrop with greenery blur, warm daylight, ideal for building focus" },
      { label: "Đồi núi mờ xa, trời nhạt, không chi tiết thừa", value: "Subtle distant hills, pale sky, clean tone, no distracting elements" },
      { label: "Không gian mở nhiệt đới, ánh sáng cân bằng", value: "Neutral Southeast Asian outdoor ambiance, diffused light, balanced natural colors" },
      { label: "Khoảng trống yên tĩnh, thoáng đãng", value: "Calm open space background, hints of trees, low contrast, perfect architectural backdrop" }
    ]
  }
];

export const DEFAULT_SETTINGS = {
  mode: 'INTERIOR' as const, 
  lighting: LIGHTING_OPTIONS[0],
  ceilingMaterial: CEILING_OPTIONS[1], // Default to first real option
  wallMaterial: WALL_OPTIONS[1],
  floorMaterial: FLOOR_OPTIONS[1],
  style: STYLE_OPTIONS[0],
  depthOfField: DOF_OPTIONS[0],
  batchSize: 1,
  quality: '4K' as const,
  // Defaults for Arch
  cameraFOV: '24mm',
  timeOfDay: 'Morning',
  vegetationLevel: 'Medium' as const,
  peopleCount: 'Few' as const,
  preserveGeometry: true,
  preserveMaterial: false,
  inputImageCategory: '3D_RENDER' as const
};

// --- NEW EXPORTS ---

export const DEFAULT_POST_SETTINGS = {
  resolution: '4K' as const,
  colorGrading: COLOR_GRADING_OPTIONS[0],
  shadows: 0,
  highlights: 0,
  hdrMode: false,
  lensCorrection: false,
  clarity: 0,
  denoise: false
};

export const VIDEO_STYLES = [
  { id: 'cinematic', label: 'Cinematic', prompt: 'Cinematic lighting, high contrast, movie look' },
  { id: 'documentary', label: 'Documentary', prompt: 'Natural lighting, handheld camera feel, realistic' },
  { id: 'archviz', label: 'ArchViz Clean', prompt: 'Clean, bright, professional architectural visualization style' },
  { id: 'moody', label: 'Moody/Dark', prompt: 'Dim lighting, atmospheric, mysterious, shadows' }
];

export const CAMERA_MOTIONS = [
  { id: 'STATIC', label: 'Static' },
  { id: 'PAN_LEFT', label: 'Pan Left' },
  { id: 'PAN_RIGHT', label: 'Pan Right' },
  { id: 'ORBIT_LEFT', label: 'Orbit Left' },
  { id: 'ORBIT_RIGHT', label: 'Orbit Right' },
  { id: 'DOLLY_IN', label: 'Dolly In' },
  { id: 'DOLLY_OUT', label: 'Dolly Out' },
  { id: 'CRANE_UP', label: 'Crane Up' },
  { id: 'CRANE_DOWN', label: 'Crane Down' },
  { id: 'WALKTHROUGH', label: 'Walkthrough' }
];

export const AUDIO_AMBIENCE = [
  { id: 'none', label: 'None' },
  { id: 'nature', label: 'Nature Sounds' },
  { id: 'urban', label: 'Urban City' },
  { id: 'interior', label: 'Interior Quiet' },
  { id: 'cafe', label: 'Cafe Ambience' }
];

export const LANDSCAPE_STYLES = [
  "Tùy chọn (Custom)...",
  "Modern Tropical",
  "Zen Garden (Japanese)",
  "English Cottage",
  "Mediterranean",
  "Desert Xeriscape",
  "Urban Rooftop",
  "Forest Natural",
  "Resort Luxury"
];

export const LANDSCAPE_FOCUS = [
  "Water Feature",
  "Pathways",
  "Seating Area",
  "Lighting",
  "Vegetation",
  "Hardscape",
  "Pool",
  "Fire Pit"
];

export const PLANT_TYPES = [
  "Tùy chọn (Custom)...",
  "Tropical (Palms/Ferns)",
  "Native Wildflowers",
  "Evergreen Shrubs",
  "Bamboo",
  "Succulents/Cactus",
  "Ornamental Grasses",
  "Fruit Trees",
  "Flowering Vines"
];

export const CLIMATES = [
  "Tùy chọn (Custom)...",
  "Tropical (Hot/Humid)",
  "Temperate (Mild)",
  "Arid (Dry/Desert)",
  "Coastal (Breezy)",
  "Mountain (Alpine)"
];

export const FOCAL_LENGTHS = [
  "12mm (Ultra Wide)",
  "16mm (Wide)",
  "24mm (Standard Wide)",
  "35mm (Human Eye)",
  "50mm (Portrait)",
  "85mm (Telephoto)"
];

export const ATMOSPHERES = [
  "Tùy chọn (Custom)...",
  "Sunny Clear Day",
  "Golden Hour (Warm)",
  "Misty Morning",
  "Overcast (Soft Light)",
  "Rainy/Wet",
  "Night (Garden Lighting)",
  "Dramatic Sunset"
];

export const RENDER_MODES = [
  { id: 'REALISTIC', label: 'Photorealistic', prompt: 'Photorealistic, 8k, highly detailed' },
  { id: 'CONCEPT', label: 'Concept Sketch', prompt: 'Architectural sketch, conceptual, artistic' },
  { id: 'WATERCOLOR', label: 'Watercolor', prompt: 'Watercolor painting style, soft edges, artistic' },
  { id: 'NIGHT', label: 'Night Rendering', prompt: 'Night time, artificial lighting, moody' },
  { id: 'AXONOMETRIC', label: 'Axonometric View', prompt: 'Isometric view, axonometric projection, clean lines' }
];
