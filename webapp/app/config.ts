export interface Config {
  Region: string;
  S3PhotoRepoBucket: string;
  DDBImageMetadataTable: string;
  DDBAlbumMetadataTable: string;
  DescribeExecutionLambda: string;
  CognitoIdentityPool: string;
}

export const CONFIG: Config = {
  DDBAlbumMetadataTable : "photo-sharing-backend-AlbumMetadataDDBTable-D5MEYA5RCNWP",
  CognitoIdentityPool : "us-east-1:ab36615a-7dd4-4740-8c8f-05f8bef9fcd8",
  Region : "us-east-1",   // might be replaced if you launched the template in a different region
  DDBImageMetadataTable : "photo-sharing-backend-ImageMetadataDDBTable-OERXYHZGFL7Q",
  S3PhotoRepoBucket : "photo-sharing-backend-photorepos3bucket-1ehh0cpiwmfo9",
  DescribeExecutionLambda : "photo-sharing-backend-DescribeExecutionFunction-XG08R342B4XI"
};
