//
//  RCTPayPalModule.m
//  paypaltest
//
//  Created by Hardik Srivastava on 03/05/24.
//

#import "RCTPayPalModule.h"
#import <React/RCTLog.h>

@implementation RCTPayPalModule

RCT_EXPORT_MODULE(PayPalModule);
RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
