import { CodeExample } from './components/code-example'

type TSection = {
    sectionName: string;
    content: JSX.Element;
}

type TCategory = {
    categoryName: string;
    sections: TSection[];
}

export const categories: TCategory[] = [
    {
        categoryName: 'Priority A Rules: Essential (Error Prevention)',
        sections: [
            {
                sectionName: 'Multi-word component names',
                content: <>
                    <p>
                        <strong>Component names should always be multi-word, except for root <code>App</code>
                            components, and built-in components provided by Vue, such as <code>&lt;transition&gt;</code>
                            or <code>&lt;component&gt;</code>.
                        </strong>
                    </p>
                    <p>This <a href="http://w3c.github.io/webcomponents/spec/custom/#valid-custom-element-name">prevents conflicts</a> with existing and future HTML elements, since all HTML elements are a single word.</p>
                    <CodeExample
                        type="bad"
                        codes={[
                            `
                            Vue.component('todo', {
                                // ...
                            })
                            `
                        ]}
                    />
                    <CodeExample
                        type="good"
                        codes={[
                            `
                            export default {
                                name: 'TodoItem',
                                // ...
                            }
                            `
                        ]}
                    />
                    <CodeExample
                        type="good"
                        codes={[
                            `
                            components/
                            |- ClearSearchButton.vue
                            |- ExcludeFromSearchInput.vue
                            |- LaunchOnStartupCheckbox.vue
                            |- RunSearchButton.vue
                            |- SearchInput.vue
                            |- TermsCheckbox.vue
                            `
                        ]}
                    />
                    <CodeExample
                        type="good"
                        codes={[
                            `
                            <div className="content style-guide with-sidebar ">
                                {categories.map((category, index) =>
                                <React.Fragment key={index}>
                                    <h2 id={buildId(category.categoryName)} tabIndex="-1" style={{ outline: 'none' }}>
                                    <a href={buildIdSign(category.categoryName)} className="headerlink" title={category.categoryName} data-scroll="">{category.categoryName}</a>
                                    </h2>

                                    {category.sections.map((section, index) =>
                                    <React.Fragment key={index}>
                                        <h3 id={buildId(section.sectionName)}>
                                        <a href={buildIdSign(section.sectionName)} className="headerlink" title={section.sectionName} data-scroll="">{section.sectionName} <sup data-p="a">essential</sup></a>
                                        </h3>
                                        {section.content}
                                    </React.Fragment>
                                    )}
                                </React.Fragment>
                                )}
                            </div >
                            `
                        ]}
                    />
                </>
            }
        ]
    }
]