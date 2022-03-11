import React, { useEffect } from 'react';
import './index.css';


const Tabs = () => {
    
    useEffect( () => {
        var radio = document.getElementById("tab1");
        radio.checked = true;
        }, []
    )

    return (
        <>
            <section className="tab-section">
            <div className="rt-container">
                <div className="col-rt-12">
                    
                    <div className="conveytabs">
                    <input id="tab1" type="radio" name="tabs" />
                    <label htmlFor="tab1"><span className='emoji'>&#x1f393;</span> Education</label>
                        
                    <input id="tab2" type="radio" name="tabs" />
                    <label htmlFor="tab2"><span className='emoji'>&#x1f433;</span> Technologies</label>
                        
                    <input id="tab3" type="radio" name="tabs" />
                    <label htmlFor="tab3"><span className='emoji'>&#x1f4bb;</span> Experience</label>
    
                    <input id="tab4" type="radio" name="tabs" />
                    <label htmlFor="tab4"><span className='emoji'>&#x1f320;</span> Achievements</label>
                        
                    <section id="content1">
                        <h2>My Education</h2>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas iure, ullam porro incidunt velit assumenda in expedita totam ipsa accusantium dignissimos quidem similique veniam mollitia? Incidunt, suscipit? Assumenda, amet repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, incidunt voluptates. Cum porro animi optio minima totam debitis temporibus, consequatur incidunt doloremque. Cum quam reprehenderit ad tempora ex nostrum accusantium.
                        </p>
                        <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, error quae. Fugit blanditiis quam atque, ut, itaque ipsam facilis distinctio nostrum recusandae ex odit fugiat, tempore exercitationem ea ipsa dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, tempore. Voluptatem eos inventore nemo atque perferendis reprehenderit laudantium quisquam tempore quaerat nulla repellendus provident, minus soluta perspiciatis accusantium, officiis omnis?
                        </p>
                    </section>
                        
                    <section id="content2"> 
                    <h2>My Experience</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, error quae. Fugit blanditiis quam atque, ut, itaque ipsam facilis distinctio nostrum recusandae ex odit fugiat, tempore exercitationem ea ipsa dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, tempore. Voluptatem eos inventore nemo atque perferendis reprehenderit laudantium quisquam tempore quaerat nulla repellendus provident, minus soluta perspiciatis accusantium, officiis omnis?
                        </p>
                    </section>
    
                    <section id="content3">
                    <h2>My Achievements</h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas iure, ullam porro incidunt velit assumenda in expedita totam ipsa accusantium dignissimos quidem similique veniam mollitia? Incidunt, suscipit? Assumenda, amet repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, incidunt voluptates. Cum porro animi optio minima totam debitis temporibus, consequatur incidunt doloremque. Cum quam reprehenderit ad tempora ex nostrum accusantium.
                        </p>
                    </section>
                        
                    <section id="content4">
                    <h2>My Aspirations</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cumque consectetur neque eum maxime voluptas obcaecati aperiam assumenda iure, sed nobis, provident tempore rem sit fugit aliquam accusamus quos ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro expedita voluptatibus nam qui, tenetur eius sint officiis nostrum numquam quod laborum fuga. Perferendis, distinctio? Aliquam a sed at hic! In!
                        </p>
                    </section>
                        
                    </div>
                
            
                </div>
            </div>
        </section>
        <br /><br /><br />
    
        </>
    )

}

export default Tabs;

