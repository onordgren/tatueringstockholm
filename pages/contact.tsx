import { GetStaticProps, NextPage } from 'next';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import Title from '../components/Title';
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
    <div className="grid gap-4">
      <Title title={page.data.title} />
      <div>{page.content}</div>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <div className="grid gap-2">
          <Input type="text" name="name" label="Name" />
          <Input type="email" name="email" label="Email" />
          <Input type="tel" name="phone" label="Phone number" />
          <Textarea name="description" label="Description" />
          <button type="submit">Send</button>
        </div>
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
