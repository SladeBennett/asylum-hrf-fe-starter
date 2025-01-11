import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';

export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    window.location.href = "https://humanrightsfirst.org/";
  };

  return (
    <div class='bg-white pt-px'>

      <div class='text-white pb-10 pt-4 primary-c'>
        <h1 class='p-6 text-6xl'>
          Asylum Office Grant Rate Tracker
        </h1>
        <h3>
          The Asylum Office Grant Rate Tracker provides asylum seekers,
          researchers, policymakers, and the public an interactive tool
          to explore USCIS data on Asylum Office decisions
        </h3>
      </div>

      <section class='flex text-2xl justify-center gap-20 m-10 pt-6'>
        <div class='flex-c gap-3'>
          <img src={barGraph} class='h-[300px]'>
          </img>
          <h2>Search Grant Rates By Office</h2>
        </div>
        <div class='flex-c gap-3'>
          <img src={pieChart} class='h-[300px]'>
          </img>
          <h2>Search Grant Rates By Nationality</h2>
        </div>
        <div class='flex-c gap-3'>
          <img src={lineGraph} class='h-[300px]'>
          </img>
          <h2>Search Grant Rates Over Time</h2>
        </div>
      </section>

      <div class='flex gap-10 justify-center text-white font-bold'>
        <button onClick={ () => navigate('/graphs') }class='p-2 primary-c pl-4 pr-4'>
          View The Data
        </button>
        <button onClick={ downloadCSV } class='primary-c p-2 pl-4 pr-4'>
          Download The Data
        </button>
      </div>

      <section class='flex'>
        <div class='p-20 content-center'>
          <img src={paperStack} class='rounded-2xl h-[70%] w-[100%]'>
          </img>
        </div>
        <div class='p-20 content-center'>
          <p class='text-xl'>
            Human Rights First has created a search tool to give you
            a user-friendly way to explore a data set of asylum decisions
            between FY 2016 and May 2021 by the USCIS Asylum Office, which
            we received through a Freedom of Information Act request. You
            can search for information on asylum grant rates by year,
            nationality, and asylum office, visualize the data with charts
            and heat maps, and download the data set.
          </p>
        </div>
      </section>

      <section>
        <div class='flex-c gap-14 pb-10 text-lg'>
          <div>
            <h3 class='text-5xl'>
              Systemic Disparity Insights
            </h3>
          </div>
          <div class='flex p-10'>
            <div class='flex-c-1 gap-12 pl-10 pr-10'>
              <div>
                <h3 class='text-4xl'>
                  36%
                </h3>
              </div>
              <div>
                <p>
                  By the end of the Trump administration, the average asylum
                  office grant rate had fallen 36% from an average of 44
                  percent in fiscal year 2016 to 28 percent in fiscal year
                  2020.
                </p>
              </div>
            </div>
            <div class='flex-c-1 gap-12 pl-10 pr-10'>
              <div>
                <h3 class='text-4xl'>
                  5%
                </h3>
              </div>
              <div>
                <p>
                  The New York asylum office grant rate dropped to 5 percent
                  in fiscal year 2020.
                </p>
              </div>
            </div>
            <div class='flex-c-1 gap-12 pl-10 pr-10'>
              <div>
                <h3 class='text-4xl'>
                  6x Lower
                </h3>
              </div>
              <div>
                <p>
                  Between fiscal year 2017 and 2020, the New York asylum
                  office's average grant rate was 6 times lower than the
                  San Francisco asylum office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <button onClick={handleReadMore} class='p-2 primary-c text-white pl-4 pr-4'>
          Read More
        </button>
      </div>
      <div class='p-10 pb-17'>
        <button onClick={scrollToTop} class='border-solid border-2 border-black p-2 rounded-xl'>
          Back To Top ^
        </button>
      </div>

    </div>
  );
};
