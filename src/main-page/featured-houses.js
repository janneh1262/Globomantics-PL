import House from '../house'

const FeaturedHouse = ({house}) =>{

    if (house) 
        
        return(<div>
                <div className="row FeaturedHouse">
                    <h3 className="col-md-12 text-center">
Featured House
                    </h3>

                </div>
                {/* <House house="{house}"/> */}
                <House house={house} />
            </div>

        );

        return(<div>
            No featured house at this time
        </div>); 
    };


export default FeaturedHouse;
