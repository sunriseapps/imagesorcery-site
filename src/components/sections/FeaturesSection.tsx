
import React from 'react';
import { Eye, Target, Layers, Type, FileText, Workflow, Lock, Puzzle } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Intelligent Object Detection & Discovery",
      description: "Unleash powerful image intelligence. ImageSorcery empowers your AI agents to accurately identify and locate objects within images using cutting-edge models like <span class='text-primary font-semibold'>YOLO from Ultralytics</span>. With the <span class='text-primary font-semibold'>detect</span> and <span class='text-primary font-semibold'>find</span> tools, your AI can gain precise visual understanding. Crucially, these capabilities allow your agent to autonomously apply computer vision when it's a necessary step to fulfill your broader requests, even if not explicitly commanded.",
      demo: "AI receives command 'remove images without animals' → uses find to identify → images without animals disappear"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Image Transformation",
      description: "Gain granular control over your visuals. ImageSorcery empowers your AI to effortlessly transform images to exact specifications. Tools like <span class='text-primary font-semibold'>rotate</span> allow precise angular adjustments, while <span class='text-primary font-semibold'>crop</span> enables perfect framing for any platform. Additionally, <span class='text-primary font-semibold'>resize</span> offers flexible scaling. Crucially, the <span class='text-primary font-semibold'>get_metainfo</span> tool provides your agent with essential image dimensions and properties, ensuring intelligent and accurate application of these transformations.",
      demo: "Tilted Leaning Tower of Pisa → AI uses rotate to straighten → crop to center perfectly"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Seamless Image Layering",
      description: "Effortlessly enhance your images by overlaying other visuals. Whether it's adding logos, watermarks, or combining elements, ImageSorcery allows your AI to seamlessly blend images with transparency handling using the <span class='text-primary font-semibold'>overlay</span> tool, creating polished, professional results.",
      demo: "Logo overlay with transparency handling on main image"
    },
    {
      icon: <Type className="w-8 h-8" />,
      title: "Dynamic Text Annotation",
      description: "Add contextual information or creative flair directly onto your images. ImageSorcery empowers your AI to draw custom text at any position, with control over font, size, and color, using the <span class='text-primary font-semibold'>draw_texts</span> tool, perfect for labels, captions, or dynamic overlays.",
      demo: "Adding custom text with different fonts, sizes, and colors to images"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Visual Highlighting & Diagramming",
      description: "Guide attention and illustrate concepts with ease. ImageSorcery allows your AI to draw various shapes directly onto images, including arrows (<span class='text-primary font-semibold'>draw_arrows</span>), circles (<span class='text-primary font-semibold'>draw_circles</span>), and rectangles (<span class='text-primary font-semibold'>draw_rectangles</span>), enabling clear visual communication and annotation for presentations or analysis.",
      demo: "Adding arrows, circles, and rectangles to highlight specific areas"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Intelligent Text Extraction (OCR)",
      description: "Transform static images into actionable data. ImageSorcery's advanced OCR capabilities enable your AI to accurately extract text from documents, forms, or even specific fields like a name from an ID card, using the <span class='text-primary font-semibold'>ocr</span> tool, turning visual information into editable and searchable data.",
      demo: "Extracting name from ID card photo with precision"
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Automated Multi-Step Workflows",
      description: "Unlock true automation by enabling your AI agent to intelligently combine ImageSorcery's powerful tools. Your agent can autonomously chain various functionalities to achieve complex visual goals, streamlining multi-step operations into a single, efficient process.",
      demo: "Find cat → crop around it → add watermark → automated workflow"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Uncompromised Privacy: Local Processing",
      description: "Unlike cloud-based solutions, ImageSorcery processes all your images directly on your local machine. This ensures your sensitive visual data never leaves your environment, providing unparalleled security and privacy. Whether you're interacting with external LLMs like <span class='text-primary font-semibold'>Claude</span>, <span class='text-primary font-semibold'>Gemini</span>, or <span class='text-primary font-semibold'>ChatGPT</span>, or leveraging the absolute security of local models such as <span class='text-primary font-semibold'>Llama</span> or <span class='text-primary font-semibold'>Mistral</span>, your visual data remains entirely within your control.",
      demo: "Data stays inside your computer with shield/lock protection"
    },
    {
      icon: <Puzzle className="w-8 h-8" />,
      title: "Expandable Model Ecosystem",
      description: "For advanced users, ImageSorcery offers unparalleled flexibility by allowing the integration of custom models. Easily download and utilize specialized models from platforms like <span class='text-primary font-semibold'>Hugging Face</span> to extend your AI's capabilities for niche tasks.",
      demo: "AI agent numbering web form fields using specialized model"
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
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
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
                  <div className="bg-muted/30 p-4 rounded-lg border-l-4 border-primary">
                    <p className="text-sm text-muted-foreground italic">
                      Demo scenario: {feature.demo}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="aspect-video bg-muted rounded-xl flex items-center justify-center glass-card hover-glow transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                      {feature.icon}
                    </div>
                    <p className="text-muted-foreground">Feature Demo</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
