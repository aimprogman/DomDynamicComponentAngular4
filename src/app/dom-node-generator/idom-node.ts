export interface IDomNode {
	tag: string | undefined;
	attributes: {
		[key: string] : string;
	};
	content: IDomNode[];
	text?: string; 

}