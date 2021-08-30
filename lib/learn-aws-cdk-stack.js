import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';

class LearnAwsCdkStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    new s3.Bucket(this, 'MyFirstBucket', {
      versioned: true
    });
  }
}

export { LearnAwsCdkStack }
