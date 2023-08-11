import * as React from 'react';

import DocumentTextIcon from '@heroicons/react/24/outline/DocumentTextIcon';
import FolderIcon from '@heroicons/react/24/outline/FolderIcon';
import cx from 'clsx';

type Node = {
  name: string;
  isHighlighted?: boolean;
  children?: Node[];
};

export const Files = (props: { data: Node[]; title?: string }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-neutral-900 dark:bg-neutral-900 border border-neutral-900 dark:border-neutral-800 font-mono">
      {props.title ? (
        <div className="mb-0.5 bg-neutral-200/10 px-3 py-3 text-sm text-white dark:text-white-100/70 border border-neutral-800">
          {props.title}
        </div>
      ) : null}

      <div className="py-3 text-[13px] leading-6 [counter-reset:line]">
        <Inner {...props} lvl={0} />
      </div>
    </div>
  );
};

const Inner = ({ data, lvl }: { data: Node[]; lvl: number }) => {
  return (
    <>
      {data.map((node) => {
        return (
          <React.Fragment key={node.name}>
            <div
              className={cx(
                'flex items-center space-x-2 border-l-4 border-l-transparent pr-4 before:mr-4 before:ml-2 before:inline-block before:w-4 before:text-right before:[counter-increment:line] before:[content:counter(line)]',
                {
                  'border-neutral-800 bg-neutral-50/10 dark:bg-neutral-200/10 before:text-white/70': node.isHighlighted,
                  'before:text-white/20': !node.isHighlighted,
                },
              )}
            >
              <div
                className={cx('text-white/80 dark:text-white-100/40', {
                  'pl-[20px]': lvl === 1,
                  'pl-[40px]': lvl === 2,
                  'pl-[60px]': lvl === 3,
                  'pl-[80px]': lvl === 4,
                })}
              >
                {!node.children ? <DocumentTextIcon className="w-4" /> : <FolderIcon className="w-4" />}
              </div>
              <div className={cx(node.isHighlighted ? 'text-white' : 'text-white/80 dark:text-white-100/90')}>
                {node.name}
              </div>
            </div>

            {node.children ? <Inner data={node.children} lvl={lvl + 1} /> : null}
          </React.Fragment>
        );
      })}
    </>
  );
};
