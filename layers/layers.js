var wms_layers = [];

var lyr_FRBDOrtholibre_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.openstreetmap.fr/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "bdortho_libre",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "FR - BD Ortho (libre)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FRBDOrtholibre_0, 0]);
var format_2020_PMDFCIVOLCAN_Masque_1 = new ol.format.GeoJSON();
var features_2020_PMDFCIVOLCAN_Masque_1 = format_2020_PMDFCIVOLCAN_Masque_1.readFeatures(json_2020_PMDFCIVOLCAN_Masque_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020_PMDFCIVOLCAN_Masque_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020_PMDFCIVOLCAN_Masque_1.addFeatures(features_2020_PMDFCIVOLCAN_Masque_1);
var lyr_2020_PMDFCIVOLCAN_Masque_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2020_PMDFCIVOLCAN_Masque_1, 
                style: style_2020_PMDFCIVOLCAN_Masque_1,
                interactive: true,
                title: '<img src="styles/legend/2020_PMDFCIVOLCAN_Masque_1.png" /> 2020_PMDFCIVOLCAN_Masque'
            });
var format_2020_PMPFCIVOLCAN_DcoupeADR_2 = new ol.format.GeoJSON();
var features_2020_PMPFCIVOLCAN_DcoupeADR_2 = format_2020_PMPFCIVOLCAN_DcoupeADR_2.readFeatures(json_2020_PMPFCIVOLCAN_DcoupeADR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020_PMPFCIVOLCAN_DcoupeADR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020_PMPFCIVOLCAN_DcoupeADR_2.addFeatures(features_2020_PMPFCIVOLCAN_DcoupeADR_2);
var lyr_2020_PMPFCIVOLCAN_DcoupeADR_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2020_PMPFCIVOLCAN_DcoupeADR_2, 
                style: style_2020_PMPFCIVOLCAN_DcoupeADR_2,
                interactive: true,
                title: '<img src="styles/legend/2020_PMPFCIVOLCAN_DcoupeADR_2.png" /> 2020_PMPFCIVOLCAN_DécoupeADR'
            });
var format_PdM_contour_2013_3 = new ol.format.GeoJSON();
var features_PdM_contour_2013_3 = format_PdM_contour_2013_3.readFeatures(json_PdM_contour_2013_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PdM_contour_2013_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PdM_contour_2013_3.addFeatures(features_PdM_contour_2013_3);
var lyr_PdM_contour_2013_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PdM_contour_2013_3, 
                style: style_PdM_contour_2013_3,
                interactive: true,
                title: '<img src="styles/legend/PdM_contour_2013_3.png" /> PdM_contour_2013'
            });
var format_2020_PMDFCIVOLCAN_MasqueOcean_4 = new ol.format.GeoJSON();
var features_2020_PMDFCIVOLCAN_MasqueOcean_4 = format_2020_PMDFCIVOLCAN_MasqueOcean_4.readFeatures(json_2020_PMDFCIVOLCAN_MasqueOcean_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020_PMDFCIVOLCAN_MasqueOcean_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020_PMDFCIVOLCAN_MasqueOcean_4.addFeatures(features_2020_PMDFCIVOLCAN_MasqueOcean_4);
var lyr_2020_PMDFCIVOLCAN_MasqueOcean_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2020_PMDFCIVOLCAN_MasqueOcean_4, 
                style: style_2020_PMDFCIVOLCAN_MasqueOcean_4,
                interactive: true,
                title: '<img src="styles/legend/2020_PMDFCIVOLCAN_MasqueOcean_4.png" /> 2020_PMDFCIVOLCAN_MasqueOcean'
            });

lyr_FRBDOrtholibre_0.setVisible(true);lyr_2020_PMDFCIVOLCAN_Masque_1.setVisible(false);lyr_2020_PMPFCIVOLCAN_DcoupeADR_2.setVisible(true);lyr_PdM_contour_2013_3.setVisible(true);lyr_2020_PMDFCIVOLCAN_MasqueOcean_4.setVisible(true);
var layersList = [lyr_FRBDOrtholibre_0,lyr_2020_PMDFCIVOLCAN_Masque_1,lyr_2020_PMPFCIVOLCAN_DcoupeADR_2,lyr_PdM_contour_2013_3,lyr_2020_PMDFCIVOLCAN_MasqueOcean_4];
lyr_2020_PMDFCIVOLCAN_Masque_1.set('fieldAliases', {'id': 'id', 'Id_2': 'Id_2', 'SurfaceSIG': 'SurfaceSIG', });
lyr_2020_PMPFCIVOLCAN_DcoupeADR_2.set('fieldAliases', {'ID': 'ID', 'CODE_HYDRO': 'CODE_HYDRO', 'TOPONYME': 'TOPONYME', 'BASS_HYDRO': 'BASS_HYDRO', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'PREC_PLANI': 'PREC_PLANI', 'SRC_COORD': 'SRC_COORD', 'STATUT': 'STATUT', 'B_FLUVIAL': 'B_FLUVIAL', 'ORIGINE': 'ORIGINE', 'COMMENT': 'COMMENT', 'CODE_BH': 'CODE_BH', 'CODE_CARTH': 'CODE_CARTH', 'ID_C_EAU': 'ID_C_EAU', 'ID_2': 'ID_2', 'CODE_HYD_1': 'CODE_HYD_1', 'TOPONYME_2': 'TOPONYME_2', 'BASS_HYD_1': 'BASS_HYD_1', 'DATE_CRE_1': 'DATE_CRE_1', 'DATE_MAJ_2': 'DATE_MAJ_2', 'DATE_APP_2': 'DATE_APP_2', 'DATE_CONF_': 'DATE_CONF_', 'SOURCE_2': 'SOURCE_2', 'ID_SOURCE_': 'ID_SOURCE_', 'PREC_PLA_1': 'PREC_PLA_1', 'SRC_COORD_': 'SRC_COORD_', 'STATUT_2': 'STATUT_2', 'B_FLUVIAL_': 'B_FLUVIAL_', 'ORIGINE_2': 'ORIGINE_2', 'COMMENT_2': 'COMMENT_2', 'CODE_BH_2': 'CODE_BH_2', 'CODE_CAR_1': 'CODE_CAR_1', 'ID_C_EAU_2': 'ID_C_EAU_2', 'Id_2_1': 'Id_2_1', 'SurfaceSIG': 'SurfaceSIG', 'ID_3': 'ID_3', 'CODE_HYD_2': 'CODE_HYD_2', 'TOPONYME_3': 'TOPONYME_3', 'BASS_HYD_2': 'BASS_HYD_2', 'DATE_CRE_2': 'DATE_CRE_2', 'DATE_MAJ_3': 'DATE_MAJ_3', 'DATE_APP_3': 'DATE_APP_3', 'DATE_CON_1': 'DATE_CON_1', 'SOURCE_3': 'SOURCE_3', 'ID_SOURC_1': 'ID_SOURC_1', 'PREC_PLA_2': 'PREC_PLA_2', 'SRC_COOR_1': 'SRC_COOR_1', 'STATUT_3': 'STATUT_3', 'B_FLUVIA_1': 'B_FLUVIA_1', 'ORIGINE_3': 'ORIGINE_3', 'COMMENT_3': 'COMMENT_3', 'CODE_BH_3': 'CODE_BH_3', 'CODE_CAR_2': 'CODE_CAR_2', 'ID_C_EAU_3': 'ID_C_EAU_3', });
lyr_PdM_contour_2013_3.set('fieldAliases', {'Id': 'Id', 'SurfaceSIG': 'SurfaceSIG', });
lyr_2020_PMDFCIVOLCAN_MasqueOcean_4.set('fieldAliases', {'ID': 'ID', });
lyr_2020_PMDFCIVOLCAN_Masque_1.set('fieldImages', {'id': 'TextEdit', 'Id_2': 'Range', 'SurfaceSIG': 'TextEdit', });
lyr_2020_PMPFCIVOLCAN_DcoupeADR_2.set('fieldImages', {'ID': 'TextEdit', 'CODE_HYDRO': 'TextEdit', 'TOPONYME': 'TextEdit', 'BASS_HYDRO': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'SRC_COORD': 'TextEdit', 'STATUT': 'TextEdit', 'B_FLUVIAL': 'TextEdit', 'ORIGINE': 'TextEdit', 'COMMENT': 'TextEdit', 'CODE_BH': 'TextEdit', 'CODE_CARTH': 'TextEdit', 'ID_C_EAU': 'TextEdit', 'ID_2': 'TextEdit', 'CODE_HYD_1': 'TextEdit', 'TOPONYME_2': 'TextEdit', 'BASS_HYD_1': 'TextEdit', 'DATE_CRE_1': 'TextEdit', 'DATE_MAJ_2': 'TextEdit', 'DATE_APP_2': 'DateTime', 'DATE_CONF_': 'DateTime', 'SOURCE_2': 'TextEdit', 'ID_SOURCE_': 'TextEdit', 'PREC_PLA_1': 'TextEdit', 'SRC_COORD_': 'TextEdit', 'STATUT_2': 'TextEdit', 'B_FLUVIAL_': 'TextEdit', 'ORIGINE_2': 'TextEdit', 'COMMENT_2': 'TextEdit', 'CODE_BH_2': 'TextEdit', 'CODE_CAR_1': 'TextEdit', 'ID_C_EAU_2': 'TextEdit', 'Id_2_1': 'Range', 'SurfaceSIG': 'TextEdit', 'ID_3': 'TextEdit', 'CODE_HYD_2': 'TextEdit', 'TOPONYME_3': 'TextEdit', 'BASS_HYD_2': 'TextEdit', 'DATE_CRE_2': 'TextEdit', 'DATE_MAJ_3': 'TextEdit', 'DATE_APP_3': 'DateTime', 'DATE_CON_1': 'DateTime', 'SOURCE_3': 'TextEdit', 'ID_SOURC_1': 'TextEdit', 'PREC_PLA_2': 'TextEdit', 'SRC_COOR_1': 'TextEdit', 'STATUT_3': 'TextEdit', 'B_FLUVIA_1': 'TextEdit', 'ORIGINE_3': 'TextEdit', 'COMMENT_3': 'TextEdit', 'CODE_BH_3': 'TextEdit', 'CODE_CAR_2': 'TextEdit', 'ID_C_EAU_3': 'TextEdit', });
lyr_PdM_contour_2013_3.set('fieldImages', {'Id': 'Range', 'SurfaceSIG': 'TextEdit', });
lyr_2020_PMDFCIVOLCAN_MasqueOcean_4.set('fieldImages', {'ID': 'TextEdit', });
lyr_2020_PMDFCIVOLCAN_Masque_1.set('fieldLabels', {'id': 'no label', 'Id_2': 'no label', 'SurfaceSIG': 'no label', });
lyr_2020_PMPFCIVOLCAN_DcoupeADR_2.set('fieldLabels', {'ID': 'no label', 'CODE_HYDRO': 'no label', 'TOPONYME': 'no label', 'BASS_HYDRO': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'SOURCE': 'no label', 'ID_SOURCE': 'no label', 'PREC_PLANI': 'no label', 'SRC_COORD': 'no label', 'STATUT': 'no label', 'B_FLUVIAL': 'no label', 'ORIGINE': 'no label', 'COMMENT': 'no label', 'CODE_BH': 'no label', 'CODE_CARTH': 'no label', 'ID_C_EAU': 'no label', 'ID_2': 'no label', 'CODE_HYD_1': 'no label', 'TOPONYME_2': 'no label', 'BASS_HYD_1': 'no label', 'DATE_CRE_1': 'no label', 'DATE_MAJ_2': 'no label', 'DATE_APP_2': 'no label', 'DATE_CONF_': 'no label', 'SOURCE_2': 'no label', 'ID_SOURCE_': 'no label', 'PREC_PLA_1': 'no label', 'SRC_COORD_': 'no label', 'STATUT_2': 'no label', 'B_FLUVIAL_': 'no label', 'ORIGINE_2': 'no label', 'COMMENT_2': 'no label', 'CODE_BH_2': 'no label', 'CODE_CAR_1': 'no label', 'ID_C_EAU_2': 'no label', 'Id_2_1': 'no label', 'SurfaceSIG': 'no label', 'ID_3': 'no label', 'CODE_HYD_2': 'no label', 'TOPONYME_3': 'no label', 'BASS_HYD_2': 'no label', 'DATE_CRE_2': 'no label', 'DATE_MAJ_3': 'no label', 'DATE_APP_3': 'no label', 'DATE_CON_1': 'no label', 'SOURCE_3': 'no label', 'ID_SOURC_1': 'no label', 'PREC_PLA_2': 'no label', 'SRC_COOR_1': 'no label', 'STATUT_3': 'no label', 'B_FLUVIA_1': 'no label', 'ORIGINE_3': 'no label', 'COMMENT_3': 'no label', 'CODE_BH_3': 'no label', 'CODE_CAR_2': 'no label', 'ID_C_EAU_3': 'no label', });
lyr_PdM_contour_2013_3.set('fieldLabels', {'Id': 'no label', 'SurfaceSIG': 'no label', });
lyr_2020_PMDFCIVOLCAN_MasqueOcean_4.set('fieldLabels', {'ID': 'no label', });
lyr_2020_PMDFCIVOLCAN_MasqueOcean_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});