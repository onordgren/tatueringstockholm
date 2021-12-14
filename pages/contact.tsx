import { GetStaticProps, NextPage } from 'next';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import { getFileContent } from '../helpers/files';

type Props = {
  page: {
    data: {
      title: string;
    };
    content: string;
  };
};

const Contact: NextPage<Props> = ({ page }) => {
  return (
    <div>
      <h1>{page.data.title}</h1>
      <div>{page.content}</div>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <Input type="text" name="name" label="Name" />
        <Input type="email" name="email" label="Email" />
        <Input type="tel" name="phone" label="Phone number" />
        <Textarea name="description" label="Description" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const dir = 'content/pages';

    const page = await getFileContent({
      dir,
      fileName: 'contact',
    });

    return {
      props: {
        page,
      },
    };
  } catch {
    return {
      props: {},
    };
  }
};

export default Contact;
