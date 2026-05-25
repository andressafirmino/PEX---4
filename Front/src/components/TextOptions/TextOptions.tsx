import type { OptionType } from '../../protocols';
import { Options } from './style';

export default function TextOptions({ text }: OptionType) {
    return (
        <Options>
            {text}
        </Options>
    );
}