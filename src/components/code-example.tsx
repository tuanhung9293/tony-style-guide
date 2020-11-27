import { CopyBlock, atomOneLight } from 'react-code-blocks';

function process(stringValue: string) {
    let lines = stringValue.split('\n');
    let indentation = '';

    if (lines[0] === '') lines.shift();

    const matches = /^[\s\t]+/.exec(lines[0]);

    if (matches) {
        indentation = matches[0];
    }

    if (indentation) {
        lines = lines.map(function (line) {
            return line.replace(indentation, '').replace(/\t/g, '    ')
        });
    }

    return indentation ? lines.join('\n').trim() : stringValue;
}

type TProps = {
    type: 'bad' | 'good';
    codes: string[];
}

export const CodeExample = ({ type, codes }: TProps) => {
    return (
        <div className={`style-example example-${type}`}>
            <h4 style={{ textTransform: 'capitalize' }}>{type}</h4>
            {codes.map((code, index) =>
                <pre key={index}>
                    <CopyBlock
                        language="jsx"
                        text={process(code)}
                        showLineNumbers={false}
                        theme={atomOneLight}
                        wrapLines={true}
                        codeBlock
                    />
                </pre>
            )}
        </div>
    );
}
