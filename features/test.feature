Feature: To search keywords in google

@OutlineScenario
Scenario Outline: Searching on google

  Given I am on google search page
  When I type "<search keyword>"
  When I click on search button
  Then I clear the search text

  Examples:
    | search keyword |
    | cucumber       |
