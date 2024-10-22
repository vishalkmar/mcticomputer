import Header from "../header";
import Footer from "../footer";
import BannerForAll from "../bannerforall";
import ModuleList from "../modulelist";
import bootstrapimage from '../images/advance/bootstrap.jpg'

function Bootstrap(){

     const curriculum = [
          {
              module: 'Module 1: Introduction to Bootstrap',
              description: 'Getting started with Bootstrap, understanding its grid system, and responsive design principles.',
              topics: ['What is Bootstrap?', 'Setting Up Bootstrap', 'Understanding the Grid System', 'Responsive Breakpoints', 'Mobile-First Design'],
          },
          {
              module: 'Module 2: Bootstrap Components',
              description: 'Exploring various Bootstrap components and their usage in web development.',
              topics: ['Buttons', 'Cards', 'Modals', 'Alerts', 'Navbars'],
          },
          {
              module: 'Module 3: Bootstrap Layouts',
              description: 'Learning how to create various layouts using Bootstrap’s utilities and components.',
              topics: ['Creating a Responsive Layout', 'Using Flexbox', 'Grid Utilities', 'Spacing and Sizing', 'Alignment Utilities'],
          },
          {
              module: 'Module 4: Bootstrap Forms',
              description: 'Understanding how to create forms using Bootstrap styles and validation.',
              topics: ['Form Basics', 'Input Groups', 'Custom Forms', 'Form Validation', 'Checkboxes and Radio Buttons'],
          },
          {
              module: 'Module 5: Bootstrap JavaScript Components',
              description: 'Implementing JavaScript components provided by Bootstrap for interactivity.',
              topics: ['Using Bootstrap’s JS Plugins', 'Tooltips and Popovers', 'Carousels', 'Collapsibles', 'Dropdowns'],
          },
          {
              module: 'Module 6: Customizing Bootstrap',
              description: 'Learning how to customize Bootstrap using Sass and utility classes.',
              topics: ['Bootstrap Sass Variables', 'Creating Custom Themes', 'Overriding Default Styles', 'Utility API', 'Building Custom Components'],
          },
          {
              module: 'Module 7: Responsive Utilities',
              description: 'Utilizing Bootstrap’s responsive utilities for a better user experience.',
              topics: ['Responsive Text', 'Hide/Show Elements', 'Responsive Images', 'Responsive Tables', 'Media Objects'],
          },
          {
              module: 'Module 8: Best Practices and Optimization',
              description: 'Learning best practices for using Bootstrap and optimizing performance.',
              topics: ['Keeping Bootstrap Updated', 'Avoiding Conflicts with Custom Styles', 'Performance Optimization Techniques', 'Accessibility Best Practices', 'Common Pitfalls'],
          },
      ];
  
      const faqs = [
          {
              question: 'What is Bootstrap? ',
              answer: 'Bootstrap is a popular front-end framework for developing responsive and mobile-first websites using HTML, CSS, and JavaScript components.'
          },
          {
              question: 'Why should I learn Bootstrap?',
              answer: 'Bootstrap simplifies the web development process by providing pre-styled components and a grid system, allowing for rapid development of responsive websites.'
          },
          {
              question: 'How do I include Bootstrap in my project?',
              answer: 'You can include Bootstrap in your project by linking the Bootstrap CSS and JS files from a CDN or by installing it via npm for local development.'
          },
          {
              question: 'What are Bootstrap components?',
              answer: 'Bootstrap components are reusable sections of code, such as buttons, forms, and navbars, that come with default styles and behaviors, making it easy to create consistent UI elements.'
          },
          {
              question: 'Can I customize Bootstrap?',
              answer: 'Yes, Bootstrap is highly customizable. You can override its default styles using custom CSS or modify its Sass variables to create your unique design.'
          },
          {
              question: 'What is the Bootstrap grid system?',
              answer: 'The Bootstrap grid system allows you to create flexible layouts using a series of rows and columns, making it easy to arrange content responsively across different screen sizes.'
          },
          {
              question: 'Is Bootstrap mobile-friendly?',
              answer: 'Yes, Bootstrap is designed with mobile-first principles, ensuring that your website is responsive and looks good on all devices.'
          },
          {
              question: 'What is the difference between Bootstrap 4 and Bootstrap 5?',
              answer: 'Bootstrap 5 introduces several new features and improvements, including the removal of jQuery dependency, enhanced grid system, and new components like offcanvas, among others.'
          },
      ];
     return (<>
     <Header/>
       <BannerForAll
        title="Bootstrap full Course"
        text="Our Bootstrap course offers a comprehensive introduction to the world of responsive web design using the popular front-end framework. Learn to create modern, mobile-first websites quickly and efficiently with Bootstrap’s grid system, components, and utility classes. Key topics include layout design, responsive images, and customizing Bootstrap themes. Gain hands-on experience through practical projects that enhance your web development skills. Ideal for beginners and professionals looking to streamline their workflow and improve their design capabilities."
        image={bootstrapimage}
        month="2 "/>
       
         <ModuleList modules={curriculum} faqs={faqs} topic="Bootstrap Curriculam"/>
        <Footer/>

     </>)
}
export default Bootstrap;