import { FaGithubSquare } from "react-icons/fa";
import { useRef } from "react";
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
    },
    green: {
        main: "bg-[#0a2922]",
        secondary: "bg-[#0d3329]",
        accent: "text-emerald-400",
        techShadow: "shadow-dark-green",
        solution: "bg-emerald-500",
    },
    purple: {
        main: "bg-[#1a1033]",
        secondary: "bg-[#221440]",
        accent: "text-violet-400",
        techShadow: "shadow-dark-purple",
        solution: "bg-violet-500",
    },
    orange: {
        main: "bg-[#1E0200]",
        secondary: "bg-[#2a0503]",
        accent: "text-amber-400",
        techShadow: "shadow-dark-orange",
        solution: "bg-amber-600",
    },
    cyan: {
        main: "bg-[#0a2933]",
        secondary: "bg-[#0d3340]",
        accent: "text-cyan-400",
        techShadow: "shadow-dark-cyan",
        solution: "bg-cyan-500",
    },
    default: {
        main: "bg-dark_primary",
        secondary: "bg-dark_primary",
        accent: "text-blue-500",
        techShadow: "shadow-dark",
        solution: "bg-blue-400",
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

    const openGallery = (index) => {
        if (lightGalleryRef.current) {
            lightGalleryRef.current.openGallery(index);
        }
    };

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

            <main
                className={`flex flex-col ${colors.main} w-full lg:h-[825px] h-[300px] lg:rounded-3xl rounded-md mb-3 lg:mb-8`}
                id={title?.toLowerCase().replace(/\s+/g, "-")}
            >
                {/* Header Section */}
                <section className="flex flex-col w-full lg:p-4 p-1">
                    <div className="flex justify-between items-center">
                        <h1 className="tracking-wide text-white lg:text-6xl text-lg font-extrabold">
                            {title}
                        </h1>

                        {githubUrl && (
                            <div
                                className="flex flex-col items-center justify-center text-white cursor-pointer"
                                onClick={() => window.open(githubUrl, "_blank")}
                            >
                                <div className="group hover:text-blue-900 flex flex-col items-center justify-center">
                                    <FaGithubSquare className="lg:text-6xl text-lg group-hover:text-blue-900" />
                                    <p className="lg:text-sm text-[5px] group-hover:text-blue-900 text-white">
                                        Github
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Subheading */}
                    {subheading && (
                        <p className={`lg:text-sm text-[5px] ${colors.accent} lg:mt-2 mt-1 font-medium`}>
                            {subheading}
                        </p>
                    )}

                    {/* Links */}
                    {links.length > 0 && (
                        <div className="flex space-x-4 lg:my-4 my-2">
                            {links.map((link, index) => (
                                <div key={index} className="group" title={link.tooltip}>
                                    <button
                                        className={`flex items-center lg:text-sm text-[5px] underline ${colors.accent}`}
                                        onClick={() => window.open(link.url, "_blank")}
                                    >
                                        {link.label}
                                        {link.icon && (
                                            <span className="lg:ml-2 ml-0.5">
                                                {link.icon}
                                            </span>
                                        )}
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Description */}
                    <p className="lg:text-xs text-[4px] text-white tracking-wide">
                        {description}
                    </p>

                    {/* Role - moved below description */}
                    {role && (
                        <p className="lg:text-sm text-[5px] text-white lg:mt-4 mt-2 font-medium">
                            My Role: {role}
                        </p>
                    )}

                    <hr className="w-full lg:my-4 my-1 mb-2" />

                    {/* Technologies */}
                    <div className="flex flex-wrap lg:gap-2 gap-0.5 lg:-top-2 -top-1 relative">
                        {technologies.map((tech, index) => (
                            <p
                                key={index}
                                className={`lg:text-xs text-[3px] lg:px-4 lg:py-3 px-1 py-1 rounded-md lg:mx-0.5 ${colors.techShadow} lg:rounded-lg text-white relative`}
                            >
                                {tech}
                            </p>
                        ))}
                    </div>
                </section>

                {/* Images Grid */}
                {images.length > 0 && (
                    <section className="grid grid-cols-3 grid-rows-[1fr,1fr] lg:gap-2 gap-1 h-full w-full">
                        {images.slice(0, 6).map((image, index) => (
                            <div key={index} onClick={() => openGallery(index)}>
                                <ImageCard image={image} index={index} accent={accent} />
                            </div>
                        ))}
                    </section>
                )}
            </main>

            {/* Secondary Section - always show if secondaryImages exist */}
            {secondaryImages.length > 0 && (
                <section className={`flex flex-col ${colors.secondary} lg:mt-10 mt-2 w-full h-[220px] lg:h-[825px] lg:rounded-3xl rounded-md lg:mb-8 mb-2 lg:p-4 p-2`}>
                    {/* Grid with Problem/Solution */}
                    {(problemText || solutionText) ? (
                        <div className="grid grid-cols-[2.5fr_2.5fr_1fr_1fr] grid-rows-[2.5fr_2.5fr_1fr_1fr] h-full w-full lg:gap-2 gap-1">
                            {/* Large left image */}
                            {secondaryImages[0] && (
                                <div className="col-span-2 row-span-3 group h-full">
                                    <div className="relative lg:rounded-3xl rounded-md overflow-hidden h-full">
                                        <img
                                            src={secondaryImages[0].src}
                                            alt={secondaryImages[0].alt}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-end justify-center p-4">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-left">
                                                <h3 className={`lg:text-base text-[3px] ${colors.accent}`}>
                                                    {secondaryImages[0].title}
                                                </h3>
                                                <p className="lg:text-xs text-[3px] tracking-tight lg:tracking-normal text-white">
                                                    {secondaryImages[0].description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Phone/vertical image */}
                            {secondaryImages[1] && (
                                <div className="col-span-2 row-span-4 group h-full lg:ml-0 ml-2">
                                    <div className="relative lg:rounded-3xl rounded-lg overflow-hidden h-full">
                                        <img
                                            src={secondaryImages[1].src}
                                            alt={secondaryImages[1].alt}
                                            className="w-full h-full lg:object-contain"
                                        />
                                        <div className="absolute lg:inset-5 inset-0 lg:-my-5 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-end justify-center p-4 rounded-3xl">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-left">
                                                <h3 className={`lg:text-base text-[3px] ${colors.accent}`}>
                                                    {secondaryImages[1].title}
                                                </h3>
                                                <p className="lg:text-xs text-[3px] tracking-tight lg:tracking-normal text-white">
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
                                    <div className="relative lg:rounded-3xl rounded-md h-full bg-slate-900 lg:p-8 p-1.5">
                                        <h3 className="text-white font-Poppins lg:mb-5 lg:text-5xl text-xs">
                                            Problem
                                        </h3>
                                        <p className="text-white font-Poppins text-[3px] tracking-tighter lg:tracking-normal lg:text-xs">
                                            {problemText}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Solution Card */}
                            {solutionText && (
                                <div className="col-span-1 row-span-1 group h-full">
                                    <div className={`relative lg:rounded-3xl rounded-md h-full ${colors.solution} lg:p-8 p-1.5`}>
                                        <h3 className="text-white font-Poppins lg:mb-5 lg:text-5xl text-xs">
                                            Solution
                                        </h3>
                                        <p className="text-white font-Poppins text-[3px] tracking-tighter lg:tracking-normal lg:text-xs">
                                            {solutionText}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        /* 2x2 grid for secondary images */
                        <div className="grid grid-cols-2 grid-rows-2 h-full w-full lg:gap-4 gap-2">
                            {secondaryImages.slice(0, 4).map((img, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => openGallery(images.length + idx)}
                                    className="col-span-1 group h-full cursor-pointer"
                                >
                                    <div className="relative lg:rounded-3xl rounded-md h-full isolate">
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-full object-cover lg:rounded-3xl rounded-md"
                                        />
                                        <div className="absolute -inset-0.5 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-end justify-start p-4 lg:rounded-3xl rounded-md">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-left">
                                                <h3 className={`lg:text-base text-[3px] ${colors.accent}`}>
                                                    {img.title}
                                                </h3>
                                                <p className="lg:text-xs text-[3px] tracking-tight lg:tracking-normal text-white">
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
        </>
    );
};

const ImageCard = ({ image, index, accent = "default" }) => {
    const colors = accentColors[accent] || accentColors.default;

    const roundedClasses = [
        "lg:rounded-r-3xl rounded-r-lg",
        "lg:rounded-3xl rounded-lg",
        "lg:rounded-l-3xl rounded-l-lg",
        "lg:rounded-tr-3xl lg:rounded-b-none rounded-r-lg rounded-br-none rounded-b-none",
        "lg:rounded-t-3xl rounded-lg rounded-b-none",
        "lg:rounded-l-3xl lg:rounded-b-none rounded-l-lg rounded-b-none rounded-bl-none",
    ];

    const heightClass = index >= 3 ? "lg:h-[213px] h-[87px]" : "";

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
                        <h3 className={`lg:text-base text-[3px] ${colors.accent}`}>
                            {image.title}
                        </h3>
                        <p className="lg:text-xs text-[3px] tracking-tight lg:tracking-normal text-white">
                            {image.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
