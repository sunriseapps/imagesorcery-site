  import React from 'react';
  import { Eye, Target, Layers, Type, FileText, Workflow, Lock, Puzzle } from 'lucide-react';

  const FeaturesSection = () => {
    const features = [
      {
        icon: <Eye className="w-8 h-8" />,
        title: "Intelligent Object Detection & Discovery",
        description: "AI agents accurately identify and locate objects using YOLO models from Ultralytics. The <span class='text-primary font-semibold'>detect</span> and <span class='text-primary font-semibold'>find</span> tools enable precise visual understanding and autonomous computer vision application.",
        prompt: "Remove images without animals",
        demoVideo: "demo-1.mp4"
      },
      {
        icon: <Target className="w-8 h-8" />,
        title: "Precision Image Transformation",
        description: "Transform images with <span class='text-primary font-semibold'>rotate</span> for angular adjustments, <span class='text-primary font-semibold'>crop</span> for perfect framing, and <span class='text-primary font-semibold'>resize</span> for flexible scaling. The <span class='text-primary font-semibold'>get_metainfo</span> tool provides essential image properties for intelligent transformations.",
        prompt: "Rotate image.png 4\" clockwise, then find and crop the tower",
        demoVideo: "demo-2.mp4"
      },
      {
        icon: <Layers className="w-8 h-8" />,
        title: "Seamless Image Layering",
        description: "Enhance images by overlaying logos, watermarks, or combining elements. The <span class='text-primary font-semibold'>overlay</span> tool seamlessly blends images with transparency handling for professional results.",
        prompt: "Place a logo.png on the bottom right corner of the image.png",
        demoVideo: "demo-3.mp4"
      },
      {
        icon: <Type className="w-8 h-8" />,
        title: "Dynamic Text Annotation",
        description: "Add custom text at any position with control over font, size, and color using the <span class='text-primary font-semibold'>draw_texts</span> tool. Perfect for labels, captions, or dynamic overlays.",
        prompt: "Numerate the cats in the image.png",
        demoVideo: "demo-4.mp4"
      },
      {
        icon: <Target className="w-8 h-8" />,
        title: "Visual Highlighting & Diagramming",
        description: "Draw shapes directly onto images including <span class='text-primary font-semibold'>draw_arrows</span>, <span class='text-primary font-semibold'>draw_circles</span>, and <span class='text-primary font-semibold'>draw_rectangles</span> for clear visual communication and annotation.",
        prompt: "Draw a big rectangle, a circle and an arrow between on image.png",
        demoVideo: "demo-5.mp4"
      },
      {
        icon: <FileText className="w-8 h-8" />,
        title: "Intelligent Text Extraction (OCR)",
        description: "Extract text from documents, forms, or specific fields using the <span class='text-primary font-semibold'>ocr</span> tool, turning visual information into editable and searchable data.",
        prompt: "Read the name from id_card.png",
        demoVideo: "demo-6.mp4"
      },
      {
        icon: <Lock className="w-8 h-8" />,
        title: "Local Processing",
        description: "Unlike cloud-based solutions, ImageSorcery processes all your images directly on your local machine. This ensures your sensitive visual data never leaves your environment, providing unparalleled security and privacy. Whether you're interacting with external LLMs like <span class='text-primary font-semibold'>Claude</span>, <span class='text-primary font-semibold'>Gemini</span>, or <span class='text-primary font-semibold'>ChatGPT</span>, or leveraging the absolute security of local models such as <span class='text-primary font-semibold'>Llama</span> or <span class='text-primary font-semibold'>Mistral</span>, your visual data remains entirely within your control.",
        isFullWidth: true
      }
    ];

    return (
      <section id="features" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Master Every Pixel: <span className="text-gradient">ImageSorcery's Core Features</span>
            </h2>
          </div>

          <div className="space-y-32">
            {features.map((feature, index) => (
              <div key={index}>
                {feature.isFullWidth ? (
                  <div className="flex justify-center">
                    <div className="w-full max-w-4xl">
                      <div className="glass-card p-8 rounded-2xl transition-all duration-300">
                        <div className="flex items-center justify-center mb-6">
                          <div className="bg-gradient-primary p-3 rounded-lg mr-4 text-white">
                            {feature.icon}
                          </div>
                          <h3 className="text-2xl font-bold">{feature.title}</h3>
                        </div>
                        <p 
                          className="text-muted-foreground leading-relaxed text-lg text-center"
                          dangerouslySetInnerHTML={{ __html: feature.description }}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                    <div className="flex-1">
                      <div className="glass-card p-8 rounded-2xl transition-all duration-300">
                        <div className="flex items-center mb-6">
                          <div className="bg-gradient-primary p-3 rounded-lg mr-4 text-white">
                            {feature.icon}
                          </div>
                          <h3 className="text-2xl font-bold">{feature.title}</h3>
                        </div>
                        <p 
                          className="text-muted-foreground leading-relaxed text-lg mb-4"
                          dangerouslySetInnerHTML={{ __html: feature.description }}
                        />
                        {feature.prompt && (
                          <div className="bg-muted/30 p-4 rounded-lg border-l-4 border-primary">
                            <p className="text-sm text-muted-foreground italic">
                              Prompt example: {feature.prompt}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="aspect-video bg-muted rounded-xl flex items-center justify-center glass-card hover-glow transition-all duration-300 overflow-hidden">
                        {feature.demoVideo ? (
                          <video 
                            src={feature.demoVideo} 
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          >
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                              {feature.icon}
                            </div>
                            <p className="text-muted-foreground">Feature Demo</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default FeaturesSection;
