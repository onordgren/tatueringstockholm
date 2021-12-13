import Input from '../components/Input';
import Textarea from '../components/Textarea';

const Contact = () => {
  return (
    <div>
      <form name="contact" method="POST" data-netlify="true">
        <Input type="text" name="name" label="Name" />
        <Input type="email" name="email" label="Email" />
        <Input type="tel" name="phone" label="Phone number" />
        <Textarea name="description" label="Description" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
