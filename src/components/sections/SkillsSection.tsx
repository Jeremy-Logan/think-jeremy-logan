import Image from '../Image';
const skills = [
    {
        name: 'Javascript',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
    },
    {
        name: 'React',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    },
    {
        name: 'NextJS',
        imageUrl:
            'https://www.svgrepo.com/show/354113/nextjs-icon.svg',
    },
    {
        name: 'Typescript',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    },
    {
        name: 'TailwindCSS',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    },
    {
        name: 'Figma',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    },
    {
        name: 'Illustrator',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/7/75/Adobe_Illustrator_CC_icon.png',
    },   
    {
        name: 'InDesign',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg',
    },
    {
        name: 'Photoshop',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',
    }, 
    {
        name: 'After Effects',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg',
    },
    {
        name: 'AWS',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    },
    {
        name: 'Azure',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
    },
]

export default function SkillsSection() {
    return (<div className='pt-12 px-4'><h2 className='text-center text-white text-3xl font-thin mb-10'>SKILLS</h2>
        <div className="grid grid-cols-1 gap-2 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 max-w-6xl mx-auto">
            
            {skills.map((skill) => (
                <div
                    key={skill.name}
                    className="relative flex items-center space-x-3 border-[1px] border-t-indigo-600 border-x-indigo-700 border-b-blue-900/60 bg-gradient-to-r from-blue-400/20 to-blue-500/10 shadow-xl shadow-blue-700/10 backdrop-blur-xl -backdrop-hue-rotate-15 px-4 py-2 sm:px-6 sm:py-4"
                >
                    <div className="flex-shrink-0">
                        <div className="h-10 w-10 relative">
                            <Image fill src={skill.imageUrl} alt="" sizes='150px ' style={{ objectFit: 'contain' }} />
                        </div>
                    </div>
                    <div className="min-w-0 flex-1">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm text-white">{skill.name}</p>
                    </div>
                </div>
            ))}
        </div></div>
    )
}
