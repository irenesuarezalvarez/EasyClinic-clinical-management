<h1>Easy Clinic - Clinical Management</h1>

<h2>Introduction</h2>
<p>What is Easy Clinic?The idea of this project was born from the hope of building an easier way to manage online clinical history in order to make professional’s work easier and more efficient. </p>

<p> Accessible from anywhere at anytime, without previous installation or hard configuration, Easy Clinic allows users to manage clinic appointments and patient information in a secure way.</p>

<h2>Description</h2>
<p>How does it work?Utilizing Node JS, Express technology, combined with MongoDb , you just need to create your account, specify your role as administrative or as a professional, then log in. </p>
<br/>
<p>The administration position will bring you access to all the center’s patients, giving you the option to add new patients to the database, manage their information, assign a professional to them and create new appointments. Also, you will easily have an overview of each professional’s agenda. </p>
<br/>
<p>If you’re accessing our application as a professional, Easy Clinic will allow you an overview of all your patients. You’ll have access to their personal information, contact details and the authority to modify them if necessary. Additionally, Easy Clinic provides the option to write your session notes during the patient appointment, as well as access their clinical history and your agenda. </p>
<br/>
<p>Continuous complaints and issues with the current patient management system of the public health system in the Canaries have led to a desire for change. And so, the aim of this project was to create a more user friendly and efficient application that better facilitates the daily work of professionals and clinic workers.</p>

<h2>Dependencies</h2>
- ReactJS - For handling and routing HTTP requests
- Axios - For modeling and mapping mongoDB data to javascript
- Cloudinary - for handling images /video uploads
- Styled components - For handling css styles
- Fontawesome - For adding icons to the application
- Syncfusion - To implement a scheduler calendar
  
<h2>Application Structure</h2>
- `index.js` Is the entry point for all node apps. This file get element from the HTML file and renders our application. 
- `components/` This folder contains all the components available both for layout or single components. 
- `pages/` - This folder contains the pages component and its divided into authentication / general /patients and professionals pages.
- `utils/` - This folder contains general utilities envolving the hole application.

<h2>Suggestions for the future</h2>
- Fix Scheduler calendar to make it render each professional's agenda show the appointments.
- Fix appointment creator to make it possible to create appointments.  
- Implement a rich editor to the Clinical History Page so the professional can improve session information adding highlights, cuotes, etc. 
- Add a derivation option inside the patient's information, sending a notification to the derived professional. 
- Implement a Third party profile, to be able to share a private clinical history with third parties involved in patients treatment. (schools, social services, speech therapists, etc. )
- Create a Patient profile to allow patients to upload documentation, have access to their appointments and have private chats with professionals.

<h2>Contact information</h2>
```
{
    author: 'Irene Suárez',
    github: 'https://github.com/irenesuarezalvarez'
}
````