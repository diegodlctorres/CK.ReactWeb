
export interface ModuleSubItemData{
    codigo_formulario:string;
    descripcion_formulario:string;
    flag_tipo_acceso:string;
}

export interface ModuleItemData{
    [key:string]: ModuleSubItemData[]
}

export interface UserDataTypes {
    codigo_perfil:string,
    descripcion_perfil:string,
    modulos : ModuleItemData
}

export interface NavGroupWrapperItem{
    path:string;
    label:string
}