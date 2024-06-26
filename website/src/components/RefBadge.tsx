import cx from 'classnames';
import context from 'src/context';
import Link from '@components/Link';
import { useStore } from '@nanostores/react';

export default function RefBadge() {
  const { ref, githubRefPath, source } = useStore(context);

  return !!ref ? (
    <Link
      href={githubRefPath}
      className={cx('rounded py-1 px-3 text-sm text-white transition', {
        'bg-green-500 hover:bg-green-400': source.type === 'branch',
        'bg-blue-500 hover:bg-blue-400': source.type === 'commit',
        'bg-orange-500 hover:bg-orange-400': source.type === 'PR',
      })}
    >
      {source.type === 'branch' && `${ref}`}
      {source.type === 'commit' && ref.substring(0, 7)}
      {source.type === 'PR' && `PR #${ref}`}
    </Link>
  ) : null;
}
