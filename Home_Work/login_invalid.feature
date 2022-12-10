Feature: Check access

  Scenario Outline: As a user, I can't log into the secure area

    Given I'am on the login page
    When I'm using invalid <username> and <password>
    Then I see an error flash <message>

    Examples:
      | username | password             | message                        |
      | foobar   | barfoo               | Your username is invalid!      |