import { GetStaticProps, NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import Title from '../components/Title';
import { getFileContent } from '../helpers/files';
import { Contact, Social } from '../types/global';

type Props = {
  page: {
    data: {
      title: string;
    };
    content: string;
  };
  contact: Contact;
  social: Social;
};

const Contact: NextPage<Props> = ({ page, contact, social }) => {
  return (
    <div className="grid gap-4">
      <Title title={page.data.title} />
      <div className="prose text-neutral-100">
        <ReactMarkdown>{page?.content}</ReactMarkdown>
      </div>
      <div className="grid gap-8 grid-cols-2 items-start">
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
        <aside className="grid gap-4">
          <div>
            <ul>
              <li>{social.data.facebook}</li>
              <li>{social.data.instagram}</li>
              <li>{social.data.twitter}</li>
            </ul>
          </div>
          <div>
            <a href={`tel:${contact.data.phone}`}>{contact.data.phone}</a>
          </div>
          <div>
            <a href={`mailto:${contact.data.email}`}>{contact.data.email}</a>
          </div>
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

    const social = await getFileContent({
      dir: 'content/global',
      fileName: 'social',
    });

    return {
      props: {
        page,
        contact,
        social,
      },
    };
  } catch {
    return {
      props: {},
    };
  }
};

export default Contact;
