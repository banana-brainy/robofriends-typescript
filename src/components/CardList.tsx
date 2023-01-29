import { FC } from "react";
import { Card } from "./Card";
import { IRobotsArray } from "./robots";

interface ICardsListProps {
    title: string;
    robots: IRobotsArray[];
};

const CardList: FC<ICardsListProps> = ({ robots }) => {
    return (
        <>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={user.id}
                            title='robot card'
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    )
                })
            }
        </>
    );
}

export default CardList
