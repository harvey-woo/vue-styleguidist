import React from 'react'
import WebpackDevServer from 'webpack-dev-server'
import { ComponentDoc, PropDescriptor } from 'vue-docgen-api'
import { TransformOptions } from 'buble'
import { Configuration, loader } from 'webpack'
import { ProcessedSection, Section } from './Section'
import { EXPAND_MODE } from './enums'
import { Example } from './Example'
import { ComponentProps } from './Component'

export interface StyleguidistContext extends loader.LoaderContext {
    _styleguidist: StyleguidistConfig
}

export interface StyleguidistConfig {
    /**
     * Your application static assets folder, will be accessible as / in the style guide dev server. 
     */
    assetsDir: string;
    /**
     * Should the styleguide try code splitting for better performance? NOte that you will need the proper transform in your babel config 
     * @default true 
     */
    codeSplit: boolean;
    compilerConfig: TransformOptions;
    /**
     * Where to find the components. Takes in a String or an Array of glob paths. Comma separated. 
     */
    components: () => (string | string[]) | string | string[];
    configDir: string;
    context: Record<string, any>;
    contextDependencies: string[];
    configureServer: (server: WebpackDevServer, env: string) => string;
    /**
     * Add a button on the top right of the code sections to copy to clipboard the current contents of the editor 
     * @default false 
     */
    copyCodeButton: boolean;
    /**
     * Allows you to modify webpack config without any restrictions 
     */
    dangerouslyUpdateWebpackConfig: (server: Configuration, env: string) => Configuration;
    /**
     * Display each component with a default example, regardless of if there's a README or <docs/> block written. 
     * @default false 
     */
    defaultExample: string;
    editorConfig: {
		theme: string
	};
    /**
     * Defines the initial state of the props and methods tab 
     * @default "collapse" 
     */
    exampleMode: EXPAND_MODE;
    getComponentPathLine: (componentPath: string) => string;
    getExampleFilename: (componentPath: string) => string;
    /**
     * @deprecated Use the theme property in the editorConfig option instead 
     * @default "base16-light" 
     */
    highlightTheme: string;
    /**
     * What components to ignore. Can be an Array or String. Comma separated. 
     */
    ignore: string[];
    /**
     * Do documented components contain JSX syntax? Set this to `false` to restore compatibility with this TypeScript cast syntax: `<any>variable` instead of `variable as any`. 
     * @default true 
     */
    jsxInComponents: boolean;
    /**
     * Allow exmaples to contain JSX syntax. Use proper JSX Vue component format in examples. 
     * @default false 
     */
    jsxInExamples: boolean;
    /**
     * Register components on their examples only instead of globally Vue.components() 
     * @default false 
     */
    locallyRegisterComponents: boolean;
    /**
     * @deprecated Use pagePerSection option instead 
     * @default false 
     */
    navigation: boolean;
    /**
     * @deprecated Use renderRootJsx option instead 
     */
    mixins: string[];
    logger: {
		info(message: string): void
		warn(message: string): void
		debug(message: string): void
	};
    /**
     * If this option is set to false, the styelguidist will not minimize the js at build. 
     * @default true 
     */
    minimize: boolean;
    /**
     * The ID of a DOM element where Styleguidist mounts. 
     * @default "rsg-root" 
     */
    mountPointId: string;
    /**
     * Render one section or component per page. If true, each section will be a single page. 
     * @default false 
     */
    pagePerSection: boolean;
    /**
     * @default 500 
     */
    previewDelay: number;
    printBuildInstructions: any;
    printServerInstructions: any;
    /**
     * Display a progress bar while building 
     * @default true 
     */
    progressBar: boolean;
    propsParser: (file: string) => Promise<ComponentDoc>;
    require: string[];
    renderRootJsx: string;
    /**
     * Shows 'Fork Me' ribbon in the top-right corner. If ribbon key is present, then it's required to add url property; text property is optional. If you want to change styling of the ribbon, please, refer to the theme section in the documentation. 
     */
    ribbon: {
		url: string,
		text: string
	};
    sections: Section[];
    /**
     * Dev server host name 
     * @default "0.0.0.0" 
     */
    serverHost: string;
    /**
     * Dev server port 
     * @default 6060 
     */
    serverPort: number;
    /**
     * @deprecated Use exampleMode option instead 
     * @default false 
     */
    showCode: boolean;
    /**
     * @deprecated Use usageMode option instead 
     * @default false 
     */
    showUsage: boolean;
    /**
     * Toggle sidebar visibility. Sidebar will be hidden when opening components or examples in isolation mode even if this value is set to true. When set to false, sidebar will always be hidden. 
     * @default true 
     */
    showSidebar: boolean;
    /**
     * Avoid loading CodeMirror and reduce bundle size significantly, use prism.js for code highlighting. Warning: editor options will not be mapped over. 
     * @default true 
     */
    simpleEditor: boolean;
    /**
     * Ignore components that don’t have an example file (as determined by getExampleFilename). These components won’t be accessible from other examples unless you manually require them. 
     * @default false 
     */
    skipComponentsWithoutExample: boolean;
    sortProps: (props: PropDescriptor[]) => PropDescriptor[];
    styleguideComponents: { [name: string]: string };
    /**
     * Folder for static HTML style guide generated with `styleguidist build` command. 
     * @default "styleguide" 
     */
    styleguideDir: string;
    /**
     * configures the prefix of the server and built urls. 
     * @default "" 
     */
    styleguidePublicPath: string;
    styles: any;
    template: any;
    theme: any;
    /**
     * Style guide title 
     */
    title: string;
    updateDocs: (doc: ComponentProps, file: string) => ComponentProps;
    updateExample: (props: Example, ressourcePath: string) => Example;
    updateWebpackConfig: any;
    /**
     * Defines the initial state of the props and methods tab 
     * @default "collapse" 
     */
    usageMode: EXPAND_MODE;
    /**
     * Print debug information. Same as --verbose command line switch. 
     * @default false 
     */
    verbose: boolean;
    /**
     * The version # of the Styleguide 
     */
    version: string;
    /**
     * @deprecated Use renderRootJsx option instead 
     */
    vuex: any;
    webpackConfig: Configuration;
}

export interface StyleGuideObject {
    sections: ProcessedSection[]
    config: StyleguidistConfig
    renderRootJsx: React.ReactNode
    welcomeScreen: any
    patterns: string[]
}