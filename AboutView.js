import Hero from './Hero';

const AboutView = () => {
    return (
        <>
        <Hero text="About Us" />
        <div className="Container">
        <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
                <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestiae impedit voluptate provident modi vel tempore officiis perspiciatis, doloribus sunt ipsa. Maxime dolores mollitia explicabo quas dignissimos. Eligendi, voluptatum quas.
                </p>
            </div>
        </div>
      </div>
      
        </>
     
    )
  }

export default AboutView;