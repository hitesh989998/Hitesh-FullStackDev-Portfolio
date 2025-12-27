import { FaGithubSquare } from "react-icons/fa";
import { useRef, useState } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const accentColors = {
    blue: {
        main: "bg-[#0a2540]",
        secondary: "bg-[#0d2d4d]",
        accent: "text-blue-400",
        techShadow: "shadow-dark-blue",
        solution: "bg-blue-500",
        // Neumorphism colors
        neuBg: "#1a1a2e",
        neuDark: "#0d0d17",
        neuLight: "#272745",
        neuAccent: "text-blue-400",
    },
    green: {
        main: "bg-[#0a2922]",
        secondary: "bg-[#0d3329]",
        accent: "text-emerald-400",
        techShadow: "shadow-dark-green",
        solution: "bg-emerald-500",
        neuBg: "#0f2922",
        neuDark: "#071511",
        neuLight: "#173d33",
        neuAccent: "text-emerald-400",
    },
    purple: {
        main: "bg-[#1a1033]",
        secondary: "bg-[#221440]",
        accent: "text-violet-400",
        techShadow: "shadow-dark-purple",
        solution: "bg-violet-500",
        neuBg: "#1a1033",
        neuDark: "#0d081a",
        neuLight: "#27184c",
        neuAccent: "text-violet-400",
    },
    orange: {
        main: "bg-[#1E0200]",
        secondary: "bg-[#2a0503]",
        accent: "text-amber-400",
        techShadow: "shadow-dark-orange",
        solution: "bg-amber-600",
        neuBg: "#1f1510",
        neuDark: "#100b08",
        neuLight: "#2e1f18",
        neuAccent: "text-amber-400",
    },
    cyan: {
        main: "bg-[#0a2933]",
        secondary: "bg-[#0d3340]",
        accent: "text-cyan-400",
        techShadow: "shadow-dark-cyan",
        solution: "bg-cyan-500",
        neuBg: "#0f2933",
        neuDark: "#08151a",
        neuLight: "#163d4c",
        neuAccent: "text-cyan-400",
    },
    default: {
        main: "bg-dark_primary",
        secondary: "bg-dark_primary",
        accent: "text-blue-500",
        techShadow: "shadow-dark",
        solution: "bg-blue-400",
        neuBg: "#1a1a2e",
        neuDark: "#0d0d17",
        neuLight: "#272745",
        neuAccent: "text-blue-400",
    },
};

const ProjectCard = ({
    title,
    subheading,
    description,
    role,
    technologies = [],
    githubUrl,
    links = [],
    images = [],
    secondaryImages = [],
    problemText,
    solutionText,
    accent = "default",
}) => {
    const colors = accentColors[accent] || accentColors.default;
    const lightGalleryRef = useRef(null);
    const allImages = [...images, ...secondaryImages];
    const [showAllTech, setShowAllTech] = useState(false);

    const openGallery = (index) => {
        if (lightGalleryRef.current) {
            lightGalleryRef.current.openGallery(index);
        }
    };

    // Get short description for mobile
    const shortDescription = description?.split('.').slice(0, 2).join('.') + '.';

    return (
        <>
            {/* Hidden LightGallery with all project images */}
            <LightGallery
                onInit={(ref) => {
                    lightGalleryRef.current = ref.instance;
                }}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                dynamic={true}
                dynamicEl={allImages.map((img) => ({
                    src: img.src,
                    thumb: img.src,
                    subHtml: `<div class="lg-sub-html-custom"><h4 style="color: #fff; font-size: 18px; margin-bottom: 8px;">${img.title}</h4><p style="color: #ddd; font-size: 14px;">${img.description}</p></div>`,
                }))}
            />

            {/* DESKTOP VIEW - Unchanged */}
            <main
                className={`hidden lg:flex flex-col ${colors.main} w-full lg:h-[825px] lg:rounded-3xl lg:mb-8`}
                id={title?.toLowerCase().replace(/\s+/g, "-")}
            >
                {/* Header Section */}
                <section className="flex flex-col w-full lg:p-4">
                    <div className="flex justify-between items-center">
                        <h1 className="tracking-wide text-white lg:text-6xl font-extrabold">
                            {title}
                        </h1>

                        {githubUrl && (
                            <div
                                className="flex flex-col items-center justify-center text-white cursor-pointer"
                                onClick={() => window.open(githubUrl, "_blank")}
                            >
                                <div className="group hover:text-blue-900 flex flex-col items-center justify-center">
                                    <FaGithubSquare className="lg:text-6xl group-hover:text-blue-900" />
                                    <p className="lg:text-sm group-hover:text-blue-900 text-white">
                                        Github
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Subheading */}
                    {subheading && (
                        <p className={`lg:text-sm ${colors.accent} lg:mt-2 font-medium`}>
                            {subheading}
                        </p>
                    )}

                    {/* Links */}
                    {links.length > 0 && (
                        <div className="flex space-x-4 lg:my-4">
                            {links.map((link, index) => (
                                <div key={index} className="group" title={link.tooltip}>
                                    <button
                                        className={`flex items-center lg:text-sm underline ${colors.accent}`}
                                        onClick={() => window.open(link.url, "_blank")}
                                    >
                                        {link.label}
                                        {link.icon && (
                                            <span className="lg:ml-2">
                                                {link.icon}
                                            </span>
                                        )}
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Description */}
                    <p className="lg:text-xs text-white tracking-wide">
                        {description}
                    </p>

                    {/* Role - moved below description */}
                    {role && (
                        <p className="lg:text-sm text-white lg:mt-4 font-medium">
                            My Role: {role}
                        </p>
                    )}

                    <hr className="w-full lg:my-4" />

                    {/* Technologies */}
                    <div className="flex flex-wrap lg:gap-2 lg:-top-2 relative">
                        {technologies.map((tech, index) => (
                            <p
                                key={index}
                                className={`lg:text-xs lg:px-4 lg:py-3 rounded-md lg:mx-0.5 ${colors.techShadow} lg:rounded-lg text-white relative`}
                            >
                                {tech}
                            </p>
                        ))}
                    </div>
                </section>

                {/* Images Grid */}
                {images.length > 0 && (
                    <section className="grid grid-cols-3 grid-rows-[1fr,1fr] lg:gap-2 h-full w-full">
                        {images.slice(0, 6).map((image, index) => (
                            <div key={index} onClick={() => openGallery(index)}>
                                <ImageCard image={image} index={index} accent={accent} />
                            </div>
                        ))}
                    </section>
                )}
            </main>

            {/* DESKTOP Secondary Section - Unchanged */}
            {secondaryImages.length > 0 && (
                <section className={`hidden lg:flex flex-col ${colors.secondary} lg:mt-10 w-full lg:h-[825px] lg:rounded-3xl lg:mb-8 lg:p-4`}>
                    {/* Grid with Problem/Solution */}
                    {(problemText || solutionText) ? (
                        <div className="grid grid-cols-[2.5fr_2.5fr_1fr_1fr] grid-rows-[2.5fr_2.5fr_1fr_1fr] h-full w-full lg:gap-2">
                            {/* Large left image */}
                            {secondaryImages[0] && (
                                <div className="col-span-2 row-span-3 group h-full">
                                    <div className="relative lg:rounded-3xl overflow-hidden h-full">
                                        <img
                                            src={secondaryImages[0].src}
                                            alt={secondaryImages[0].alt}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-end justify-center p-4">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-left">
                                                <h3 className={`lg:text-base ${colors.accent}`}>
                                                    {secondaryImages[0].title}
                                                </h3>
                                                <p className="lg:text-xs lg:tracking-normal text-white">
                                                    {secondaryImages[0].description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Phone/vertical image */}
                            {secondaryImages[1] && (
                                <div className="col-span-2 row-span-4 group h-full">
                                    <div className="relative lg:rounded-3xl overflow-hidden h-full">
                                        <img
                                            src={secondaryImages[1].src}
                                            alt={secondaryImages[1].alt}
                                            className="w-full h-full lg:object-contain"
                                        />
                                        <div className="absolute lg:inset-5 lg:-my-5 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-end justify-center p-4 rounded-3xl">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-left">
                                                <h3 className={`lg:text-base ${colors.accent}`}>
                                                    {secondaryImages[1].title}
                                                </h3>
                                                <p className="lg:text-xs lg:tracking-normal text-white">
                                                    {secondaryImages[1].description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Problem Card */}
                            {problemText && (
                                <div className="col-span-1 row-span-1 group h-full">
                                    <div className="relative lg:rounded-3xl h-full bg-slate-900 lg:p-8">
                                        <h3 className="text-white font-Poppins lg:mb-5 lg:text-5xl">
                                            Problem
                                        </h3>
                                        <p className="text-white font-Poppins lg:tracking-normal lg:text-xs">
                                            {problemText}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Solution Card */}
                            {solutionText && (
                                <div className="col-span-1 row-span-1 group h-full">
                                    <div className={`relative lg:rounded-3xl h-full ${colors.solution} lg:p-8`}>
                                        <h3 className="text-white font-Poppins lg:mb-5 lg:text-5xl">
                                            Solution
                                        </h3>
                                        <p className="text-white font-Poppins lg:tracking-normal lg:text-xs">
                                            {solutionText}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        /* 2x2 grid for secondary images */
                        <div className="grid grid-cols-2 grid-rows-2 h-full w-full lg:gap-4">
                            {secondaryImages.slice(0, 4).map((img, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => openGallery(images.length + idx)}
                                    className="col-span-1 group h-full cursor-pointer"
                                >
                                    <div className="relative lg:rounded-3xl h-full isolate">
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-full object-cover lg:rounded-3xl"
                                        />
                                        <div className="absolute -inset-0.5 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-end justify-start p-4 lg:rounded-3xl">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-left">
                                                <h3 className={`lg:text-base ${colors.accent}`}>
                                                    {img.title}
                                                </h3>
                                                <p className="lg:text-xs lg:tracking-normal text-white">
                                                    {img.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            )}

            {/* MOBILE/TABLET VIEW - Neumorphism Card Design */}
            <div className="lg:hidden mb-4" id={`${title?.toLowerCase().replace(/\s+/g, "-")}-mobile`}>
                <div 
                    className="rounded-3xl overflow-hidden p-4 sm:p-5 md:p-6"
                    style={{
                        backgroundColor: colors.neuBg,
                        boxShadow: `8px 8px 16px ${colors.neuDark}, -8px -8px 16px ${colors.neuLight}`
                    }}
                >
                    {/* Hero Image - Neumorphic Inset */}
                    <div 
                        className="relative h-40 sm:h-52 md:h-64 rounded-2xl overflow-hidden mb-4 sm:mb-5"
                        style={{
                            boxShadow: `inset 4px 4px 8px ${colors.neuDark}, inset -4px -4px 8px ${colors.neuLight}`
                        }}
                    >
                        {images[0] && (
                            <img
                                src={images[0].src}
                                alt={images[0].alt}
                                className="w-full h-full object-cover cursor-pointer"
                                onClick={() => openGallery(0)}
                            />
                        )}
                        <div 
                            className="absolute inset-0 pointer-events-none"
                            style={{ background: `linear-gradient(to top, ${colors.neuBg}, transparent)` }}
                        />
                        



                    </div>

                    {/* Title Section */}
                    <div className="mb-4 sm:mb-5">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                            {title}
                        </h2>
                        <p className={`${colors.neuAccent} text-[10px] sm:text-xs font-medium`}>
                            {subheading}
                        </p>
                    </div>

                    {/* Neumorphic Action Buttons */}
                    <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-5">
                        {links[0] && (
                            <button
                                onClick={() => window.open(links[0].url, "_blank")}
                                className={`flex-1 px-4 py-2.5 sm:px-5 sm:py-3 ${colors.neuAccent} text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 active:scale-95`}
                                style={{
                                    backgroundColor: colors.neuBg,
                                    boxShadow: `4px 4px 8px ${colors.neuDark}, -4px -4px 8px ${colors.neuLight}`
                                }}
                            >
                                {links[0].label || 'View Project'}
                            </button>
                        )}
                        {githubUrl && (
                            <button
                                onClick={() => window.open(githubUrl, "_blank")}
                                className="flex-1 px-4 py-2.5 sm:px-5 sm:py-3 text-slate-300 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 active:scale-95"
                                style={{
                                    backgroundColor: colors.neuBg,
                                    boxShadow: `4px 4px 8px ${colors.neuDark}, -4px -4px 8px ${colors.neuLight}`
                                }}
                            >
                                GitHub
                            </button>
                        )}
                    </div>

                    {/* Role Card */}
                    {role && (
                        <div 
                            className="p-3 sm:p-4 rounded-xl mb-1"
                            style={{
                                backgroundColor: colors.neuBg
                            }}
                        >
                            <p className={`${colors.neuAccent} text-[10px] sm:text-xs font-medium`}>
                                My Role: {role.length > 80 ? role.substring(0, 80) + '...' : role}
                            </p>
                        </div>
                    )}

                    {/* Description Card */}
                    <div 
                        className="p-3 sm:p-4 rounded-2xl mb-4 sm:mb-5"
                        style={{
                            backgroundColor: colors.neuBg
                        }}
                    >
                        <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed">
                            {shortDescription}
                        </p>
                    </div>

                    {/* Tech Stack - Neumorphic Pills */}
                    <div className="mb-4 sm:mb-5">
                        <h4 className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mb-3 font-semibold">
                            Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2 sm:gap-2.5">
                            {(showAllTech ? technologies : technologies.slice(0, 6)).map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-2.5 py-1.5 sm:px-3 sm:py-2 text-slate-300 text-[9px] sm:text-[10px] rounded-lg"
                                    style={{
                                        backgroundColor: colors.neuBg,
                                        boxShadow: `3px 3px 6px ${colors.neuDark}, -3px -3px 6px ${colors.neuLight}`
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                            {technologies.length > 6 && (
                                <button 
                                    onClick={() => setShowAllTech(!showAllTech)}
                                    className={`px-2.5 py-1.5 sm:px-3 sm:py-2 ${colors.neuAccent} text-[9px] sm:text-[10px] rounded-lg`}
                                    style={{
                                        backgroundColor: colors.neuBg,
                                        boxShadow: `3px 3px 6px ${colors.neuDark}, -3px -3px 6px ${colors.neuLight}`
                                    }}
                                >
                                    {showAllTech ? 'Less' : `+${technologies.length - 6}`}
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Image Gallery - Neumorphic Grid */}
                    <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-4 sm:mb-5">
                        {images.slice(0, 6).map((img, index) => (
                            <div
                                key={index}
                                onClick={() => openGallery(index)}
                                className="relative rounded-xl overflow-hidden aspect-square cursor-pointer active:scale-95 transition-transform"
                                style={{
                                    boxShadow: `4px 4px 8px ${colors.neuDark}, -4px -4px 8px ${colors.neuLight}`
                                }}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Secondary Images - Neumorphic Grid */}
                    {secondaryImages.length > 0 && (
                        <div className="pt-4 sm:pt-5">
                            <h4 className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mb-3 font-semibold">
                                More Screenshots
                            </h4>
                            <div className="grid grid-cols-4 gap-2 sm:gap-2.5">
                                {secondaryImages.slice(0, 4).map((img, index) => (
                                    <div
                                        key={index}
                                        onClick={() => openGallery(images.length + index)}
                                        className="relative rounded-lg overflow-hidden aspect-square cursor-pointer active:scale-95 transition-transform"
                                        style={{
                                            boxShadow: `3px 3px 6px ${colors.neuDark}, -3px -3px 6px ${colors.neuLight}`
                                        }}
                                    >
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

const ImageCard = ({ image, index, accent = "default" }) => {
    const colors = accentColors[accent] || accentColors.default;

    const roundedClasses = [
        "lg:rounded-r-3xl",
        "lg:rounded-3xl",
        "lg:rounded-l-3xl",
        "lg:rounded-tr-3xl lg:rounded-b-none",
        "lg:rounded-t-3xl",
        "lg:rounded-l-3xl lg:rounded-b-none",
    ];

    const heightClass = index >= 3 ? "lg:h-[213px]" : "";

    return (
        <div className={`col-span-1 row-span-1 group ${heightClass} cursor-pointer`}>
            <div className={`relative ${roundedClasses[index] || ""} h-full isolate`}>
                <img
                    src={image.src}
                    alt={image.alt || `Project image ${index + 1}`}
                    className={`w-full h-full object-cover ${roundedClasses[index] || ""}`}
                />
                <div className={`absolute -inset-0.5 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-end justify-center p-4 ${roundedClasses[index] || ""}`}>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-left">
                        <h3 className={`lg:text-base ${colors.accent}`}>
                            {image.title}
                        </h3>
                        <p className="lg:text-xs lg:tracking-normal text-white">
                            {image.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
