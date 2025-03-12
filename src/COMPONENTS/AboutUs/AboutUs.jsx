const AboutUs = () => {
  return (
    <div className="container mx-auto mt-10 md:mt-20 px-2 md:px-0 mb-10 md:mb-0">
      {/* row 1 */}
      <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-3">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          What are the top trending movies right now?
        </div>
        <div className="collapse-content text-sm text-gray-600">
          Our website updates the trending movies list daily. You can check the
          Trending section to find the most popular movies based on user ratings
          and views.
        </div>
      </div>
      {/* row 2 */}
      <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How can I watch movies for free on this website?
        </div>
        <div className="collapse-content text-sm text-gray-600">
          You can watch movies for free by browsing our Free Movies section.
          Some content may require an account, but no payment is needed for most
          movies.
        </div>
      </div>
      {/* row 3 */}
      <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Do you offer movie recommendations based on my preferences?
        </div>
        <div className="collapse-content text-sm text-gray-600">
          Yes! Once you create an account and rate a few movies, our system will
          suggest movies based on your taste and viewing history.
        </div>
      </div>
      {/* row 4 */}
      <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How often is the movie database updated?
        </div>
        <div className="collapse-content text-sm text-gray-600">
          We update our movie database daily to include the latest releases,
          trending films, and user-requested content.
        </div>
      </div>
      {/* row 5 */}
      <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Can I request a specific movie to be added?
        </div>
        <div className="collapse-content text-sm text-gray-600">
          Absolutely! If you don’t find a movie on our website, you can request
          it through our Request a Movie section, and we’ll try to add it as
          soon as possible.
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
