import movingRenovationLogoPng from '../../assets/Moving_Renovation_Logo.png';
import movingRenovationLogoWebp from '../../assets/Moving_Renovation_Logo.webp';



const Logo = () => {
    return (
    <div className="logo w-40 h-36 flex justify-center items-center mx-auto sm:mx-auto">
        <picture>
                <source srcSet={movingRenovationLogoWebp} type="image/webp" />
                <source srcSet={movingRenovationLogoPng} type="image/png" />
                <img 
                src={movingRenovationLogoPng} 
                alt="Moving Renovation Logo"
                loading="lazy"
                />
            </picture>
    </div>
    )
}

export default Logo;