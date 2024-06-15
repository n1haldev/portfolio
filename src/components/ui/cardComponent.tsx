import React from 'react';

// This is a custom Icon type
interface Icon {
  name: string;
  url: string;
  className: string;
}

// Define the type for the props
interface CardComponentProps {
  title: string;
  icons: string[];
  fieldsetClassName?: string;
  legendClassName?: string;
  imgClassName?: string;
  additionals?: Icon[]; 
}

// Define the card component
const CardComponent: React.FC<CardComponentProps> = ({
  title,
  icons,
  fieldsetClassName = "h-full md:h-1/2 w-full text-center px-5 py-2 border-4 rounded-xl",
  legendClassName = "font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl",
  imgClassName = "md:m-2",
  additionals,
}) => {
  return (
    <div>
      <fieldset className={fieldsetClassName}>
        <legend className={legendClassName}>{title}</legend>
        <div className="flex w-full justify-center">
          {icons.map((icon, index) => {
            return <img key={index} className={imgClassName} src={`https://skillicons.dev/icons?i=${icon}&theme=dark`} alt={icon} />;
          })}
          {additionals && additionals.map((icon, index) => {
            return <img key={index} className={icon.className} src={icon.url} alt={icon.name} />;
          })}
        </div>
      </fieldset>
    </div>
  );
};

export default CardComponent;
