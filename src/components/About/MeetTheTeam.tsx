import ComponentTitle from "../shared/ComponentTitle";

const MeetTheTeam = () => {
  return (
    <section className="py-6">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
        <ComponentTitle
          title="Our Team"
          subTitle="Meet the dedicated team members of Wilderness Wonders, committed to
          providing you with the best camping gear and expertise to enhance your
          outdoor adventures."
        />
        <div className="flex flex-row flex-wrap gap-10 md:gap-y-24 md:gap-x-36 justify-center">
          <div className="flex flex-col justify-center text-center">
            <img
              alt="James Doe"
              className="self-center flex-shrink-0 size-32 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://images.unsplash.com/photo-1650630729397-810915b32ac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZW1wbG95ZWUlMjBwb3J0Zm9saW98ZW58MHx8MHx8fDI%3D"
            />
            <p className="text-xl font-semibold">James Doe</p>
            <p className="dark:text-gray-400">CEO</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <img
              alt="Jane Smith"
              className="self-center flex-shrink-0 size-32 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://images.unsplash.com/photo-1713947505435-b79c33c6c91a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGVtcGxveWVlJTIwcG9ydGZvbGlvfGVufDB8MHwwfHx8Mg%3D%3D"
            />
            <p className="text-xl font-semibold">Jane Smith</p>
            <p className="dark:text-gray-400">Marketing Specialist</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <img
              alt="Michael Brown"
              className="self-center flex-shrink-0 size-32 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVtcGxveWVlJTIwcG9ydGZvbGlvfGVufDB8fDB8fHwy"
            />
            <p className="text-xl font-semibold">Michael Brown</p>
            <p className="dark:text-gray-400">Product Manager</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <img
              alt="Emily Johnson"
              className="self-center flex-shrink-0 size-32 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://images.unsplash.com/photo-1713946598517-a5a1c6365828?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <p className="text-xl font-semibold">Emily Johnson</p>
            <p className="dark:text-gray-400">Customer Service Lead</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <img
              alt="Chris Lee"
              className="self-center flex-shrink-0 size-32 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://images.unsplash.com/photo-1713946598456-a25ab3645730?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <p className="text-xl font-semibold">Chris Lee</p>
            <p className="dark:text-gray-400">Logistics Coordinator</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <img
              alt="Alex Taylor"
              className="self-center flex-shrink-0 size-32 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://images.unsplash.com/photo-1594361823867-d45c7fbe7438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGVtcGxveWVlJTIwcG9ydGZvbGlvfGVufDB8MHwwfHx8Mg%3D%3D"
            />
            <p className="text-xl font-semibold">Alex Taylor</p>
            <p className="dark:text-gray-400">Sales Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
