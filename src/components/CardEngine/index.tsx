import "./styles.scss";

interface CardEngineProps {
  imgSrc: string;
  imgAlt: string;
  textOne: string;
  textTwo: string;
  textThree?: string;
  bgColor?: string;
}

export const CardEngine = ({ imgSrc, imgAlt, textOne, textTwo, textThree, bgColor }: CardEngineProps) => {
  return (
    <div tabIndex={0} style={{ backgroundColor: bgColor }} className="cardEngine-div">
      <img src={imgSrc} alt={imgAlt} />

      <p tabIndex={0}>{textOne}</p>

      <p tabIndex={0}>
        {textTwo}
        {textThree && <span>{" " + textThree}</span>}
      </p>
    </div>
  );
};
