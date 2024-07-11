import { SupportProgram } from '@/type/support';
import { linkify } from '@/utils/string';

type Props = {
	support: SupportProgram;
};
export default function SupportPostBody({ support }: Props) {
	return (
		<article className="whitespace-pre-wrap break-words">
			{linkify(support.content)}
		</article>
	);
}
