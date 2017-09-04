import * as React from 'react';
export interface HelloProps {
    compiler: string;
    framework: string;
}


export class Hello extends React.Component {
    render() {
        return(
            <div>
                Hello World
            </div>
        )
    }
}