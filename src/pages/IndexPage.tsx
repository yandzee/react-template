import { observer } from 'mobx-react-lite';
import { useApplication } from '~/application';

import cls from '~/styles/pages/index.module.scss';

// NOTE: Index Page is a top level component and hence usage of `useApplication`
// hook is allowed here.
export const IndexPage = observer(function IndexPage() {
  const { ui } = useApplication();

  return (
    <div className={cls.indexPage}>
      <div className={cls.demoSection}>
        <div className={cls.caption}>Simple reactivity</div>

        <div className={cls.counter}>
          <div>{ui.counter.num}</div>
          <button onClick={() => ui.counter.increment()}>Count</button>
        </div>
      </div>
    </div>
  );
});
