import React from "react";
import Avatar from '../../assets/imgs/eu.jpg';

const Sidebar = () => {
    return(
        <div class="card"  >

            <div class="card-body">

                <img class="card-img-top" src={Avatar} alt="Pedro Victor"  />
                <h5 id="dev" class="card-title">Desenvolvedor</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    )

};

export default Sidebar;