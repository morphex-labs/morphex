import type { NextPage } from 'next';
import toast from 'react-hot-toast';
import CustomToast from '../components/Toasts/CustomToast';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(['some.query-here']);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // const notify = () => toast.custom((t) => <CustomToast t={t} />);
  const notify = () => toast.success('Transaction completed successfully!');

  return (
    <div className="text-3xl">
      <h1>Hello from NextJS</h1>
      <p>{data}</p>
      <button type="button" onClick={notify}>
        Toast
      </button>
    </div>
  );
};

export default Home;
