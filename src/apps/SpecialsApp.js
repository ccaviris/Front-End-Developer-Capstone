import salad from "../assets/salad.jpg";
import pasta from "../assets/pasta.jpg";
import fish from "../assets/fish.jpg";

function SpecialsApp() {
    return <section>
    <article>
      <h2>Try our salad</h2>
      <img src={salad} alt="Salad Clipare that we found online"/>
      <p>
        It's defiantely a salid and some might even go so far as to say it's fit for human consumption. The FDA had tried to argue otherwise, but our second rate legal team got us a temperary injuction to keep selling our salad until the trial is resolved. Try our salad now, while you still can get it!
      </p>
    </article>
    <article>
      <h2>Pasta, some think it's good!</h2>
      <img src={pasta} alt="We wish our pasta looked this good"/>
      <p>
        Picture fresh, hand made pasta made using an authentic Italian secret family recpipie that's been passed down from generation to generation for over two hundred years. In a double blind study, 2 out of 10 participants couldn't correctly identify the difference between that pasta and ours when shown black and white photos side by side.
      </p>
    </article>
    <article>
      <h2>Our Fish Tastes Fishy</h2>
      <img src={fish} alt="Salad Clipare that we found online"/>
      <p>
       This char grilled fish delicately seasoned with a secret blend of herbs and lemon with a side of mini potatoes and tomatoes is made by our leading competition, who's name we won't mention. It's a fantastic fish that you can get in just about any five star restaurant. Our fish on the other hand, our fish is different. Each month we get a shipment of the finest fish that New Yorks East river produced that didn't sell in local fish markets shipped right to The Little Lemon here in Chicago. Delicately seasoned? No, it's swimming in butter with objectively too much garlic. Try our fish and everyone will smell it on your breath for a week! I dare you...come and try our fish.
      </p>
    </article>
  </section>
}

export default SpecialsApp;