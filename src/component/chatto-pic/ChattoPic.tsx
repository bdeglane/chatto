import * as React from 'react';
import './ChattoPic.css';

export interface IChattoPicProps {
    src: string;
    alt: string;
}

// tslint:disable
export const ChattoPic: React.SFC<IChattoPicProps> = (props) => (<img className='chatto-pic'
                                                                      src={props.src}
                                                                      alt={props.alt}/>);
