'use strict';

angular.module('azirkoDatetimepicker', [])
	.directive('azirkoDateTimePicker', ['$timeout',
		function($timeout) {
			return {
				restrict: 'A',
				require: "?ngModel",
				scope: {
					pickDate: '@azirkoPickDate',
					pickTime: '@azirkoPickTime',
					useMinutes: '@azirkoUseMinutes',
					useSeconds: '@azirkoUseSeconds',
					useCurrent: '@azirkoUseCurrent',
					minuteStepping: '@azirkoMinuteStepping',
					minDate: '@azirkoMinDate',
					maxDate: '@azirkoMaxDate',
					showToday: '@azirkoShowToday',
					collapse: '@azirkoCollapse',
					language: '@azirkoLanguage',
					defaultDate: '@azirkoDefaultDate',
					disabledDates: '@azirkoDisabledDates',
					enabledDates: '@azirkoEnabledDates',
					icons: '@azirkoIcons',
					useStrict: '@azirkoUseStrict',
					direction: '@azirkoDirection',
					sideBySide: '@azirkoSideBySide',
					daysOfWeekDisabled: '@azirkoDaysOfWeekDisabled'
				},
				link: function postLink(scope, element, attrs, ngModel) {
					//timeout to ensure DOM is ready
					$timeout(function() {
						element.datetimepicker({
							pickDate: scope.pickDate,
							pickTime: scope.pickTime,
							useMinutes: scope.useMinutes,
							useSeconds: scope.useSeconds,
							useCurrent: scope.useCurrent,
							minuteStepping: scope.minuteStepping,
							minDate: scope.minDate,
							maxDate: scope.maxDate,
							showToday: scope.showToday,
							collapse: scope.collapse,
							language: scope.language,
							defaultDate: scope.defaultDate,
							disabledDates: scope.disabledDates,
							enabledDates: scope.enabledDates,
							icons: scope.icons,
							useStrict: scope.useStrict,
							direction: scope.direction,
							sideBySide: scope.sideBySide,
							daysOfWeekDisabled: scope.daysOfWeekDisabled,
						});
						// defaultDate is filled in the UI, but not binded to model
						ngModel.$setViewValue(element.context.value);
					});
				}
			};
		}
	]);