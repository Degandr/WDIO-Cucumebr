Feature: The Internet Guinea Pig Website_2

  Scenario Outline: As a user, I can select option in dropdown

    Given I am on dropdown page
    When I select an option
    Then I need make sure that option is selected and have a <message>

    Examples:
      | message |
      | Option 1|