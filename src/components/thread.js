import React from 'react';
import postData from '../data/threadItems';

export default () => {

    const threads = postData.map( (item, index) => {
        console.log(item)
        return (
            <div key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <small className="text-muted">Comments</small>
                <div className="row">
                    <div className="col">
                        <span><i className="fas fa-user-circle mr-2"></i>{item.comments[0].name}</span>
                        <p><small>{item.comments[0].comment}</small></p>
                    </div>
                
                
                </div>
                <div className="dropdown-divider mb-5"></div>
            </div>
        )
    }) 

    return (
        <div className="col-m-12 col-sm-9 justify-content-start mt-5 ">
            {threads}
            {/* <h3>What does this mean?</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sit sapiente corporis, fugiat ea, cupiditate doloribus amet dolorem ducimus pariatur aperiam fugit facilis quidem id quaerat. Earum officia voluptatum delectus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut nemo minus fuga accusamus aut atque tenetur cumque quibusdam, rem beatae velit culpa, provident, non laborum nostrum iste ex delectus.</p>
        

            <small className="text-muted">comments</small>
            <div className="row">
                <div className="col">
                    <span><i className="fas fa-user-circle mr-2 "></i> Jane Doe</span>
                    <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur commodi recusandae animi, quibusdam natus laudantium assumenda sed ab, sapiente odit consectetur quae. Soluta quo exercitationem, id aperiam nostrum enim accusamus.</small></p>
                </div>
               
            </div>
            <div className="dropdown-divider"></div> */}

        </div>
    )
}