import { FC } from 'react';

interface IScrollProps {
    title: string;
    children: JSX.Element
}

const Scroll: FC<IScrollProps> = (props, children) => {
    return (
        <div style={{overflowY:'scroll', border: '1px solid black', height: '900px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;