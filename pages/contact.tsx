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
  contact: {
    data: {
      phone: string;
      email: string;
      street: string;
      postal: string;
      country: string;
    };
  };
};

const Contact: NextPage<Props> = ({ page, contact }) => {
  return (
    <div className="grid gap-4">
      <Title title={page.data.title} />
      <div>{page.content}</div>
      <div className="grid gap-4 grid-cols-2">
        <section className="bg-neutral-700 p-4">
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid gap-4">
              <Input type="text" name="name" label="Name" />
              <Input type="email" name="email" label="Email" />
              <Input type="tel" name="phone" label="Phone number" />
              <Textarea name="description" label="Description" />
              <button type="submit">Send</button>
            </div>
          </form>
        </section>
        <aside>
          <div>{contact.data.phone}</div>
          <div>{contact.data.email}</div>
        </aside>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const page = await getFileContent({
      dir: 'content/pages',
      fileName: 'contact',
    });

    const contact = await getFileContent({
      dir: 'content/global',
      fileName: 'contact',
    });

    return {
      props: {
        page,
        contact,
      },
    };
  } catch {
    return {
      props: {},
    };
  }
};

export default Contact;
