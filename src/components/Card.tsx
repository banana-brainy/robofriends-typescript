import { FC } from "react";

export interface ICardProps {
  key: number;
  title: string;
  id: number;
  name: string;
  email: string;
}

export const Card: FC<ICardProps> = ({name, email, id}) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      <img src={`https://robohash.org/${id}?200x200`} alt="robofriends card"/>
      <>
        <h2>{name}</h2>
        <p>{email}</p>
      </>
    </div>
  );
}
