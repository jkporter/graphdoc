import { Plugin } from '../lib/utility';
import { Schema, PluginInterface } from '../lib/interface';
import NavigationSchema from './navigation.schema';
import NavigationScalar from './navigation.scalar';
import NavigationEnum from './navigation.enum';
import NavigationInterfaces from './navigation.interface';
import NavigationUnion from './navigation.union';
import NavigationObject from './navigation.object';
import NavigationIput from './navigation.input';
import NavigationDirective from './navigation.directive';
import DocumentSchema from './document.schema';

export default class NavigationDirectives extends Plugin implements PluginInterface {

    plugins: PluginInterface[];

    constructor(document: Schema, graphdocPackage: any, projectPackage: any) {
        super(document, graphdocPackage, projectPackage);
        this.plugins = [
            new NavigationSchema(document, graphdocPackage, projectPackage),
            new NavigationScalar(document, graphdocPackage, projectPackage),
            new NavigationEnum(document, graphdocPackage, projectPackage),
            new NavigationInterfaces(document, graphdocPackage, projectPackage),
            new NavigationUnion(document, graphdocPackage, projectPackage),
            new NavigationObject(document, graphdocPackage, projectPackage),
            new NavigationIput(document, graphdocPackage, projectPackage),
            new NavigationDirective(document, graphdocPackage, projectPackage),
            new DocumentSchema(document, graphdocPackage, projectPackage),
        ];
    }


    getNavigations(buildForType?: string) {
        return Plugin.collectNavigations(this.plugins, buildForType);
    };

    getDocuments(buildForType?: string) {
        return Plugin.collectDocuments(this.plugins, buildForType);
    };

    getHeaders(buildForType?: string) {
        return Plugin.collectHeaders(this.plugins, buildForType);
    }

    getAssets() {
        return Plugin.collectAssets(this.plugins);
    }
}