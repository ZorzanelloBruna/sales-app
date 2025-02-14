import { ReactNode } from "react";
import Menu from "../menu/menu";

interface LayoutPages {
    titulo?: string;
    children?: ReactNode;
}

export const Layout: React.FC<LayoutPages> = ({titulo, children}) => {
    return(
        <div className="app">
            <section className="main-content columns is-fullheight has-background-light">
                <Menu/>
                <div className="container column is-9">
                    <div className="section">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-header-title">
                                    {titulo}
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="content">
                                    {children}
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </section>            
        </div>
    );
}