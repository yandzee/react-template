import { useApplication } from '~/application';

// NOTE: Index Page is a top level component and hence usage of `useApplication`
// hook is allowed here.
export const IndexPage = function IndexPage() {
  const { ui } = useApplication();

  return (
    <div className="index page">
      <div className='counter'>
        <div>{ui.counter.num}</div>
        <button>Count</button>
      </div>
    </div>
  );
}
