import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';

interface SidebarButtonProps extends Omit<FontAwesomeIconProps, 'icon'>{
  label: string;
  icon: IconDefinition;
  route: string;
}

export default function SidebarButton({ label, icon, route }: SidebarButtonProps) {
  return (
    <button className="hover:bg-slate-500 text-slate-400 hover:text-white font-bold py-3 px-4 rounded inline-flex items-center">
      <FontAwesomeIcon className="fill-current w-4 h-4 mr-2" icon={icon} />
      <Link href={route}>{label}</Link>
    </button>
  );
}
